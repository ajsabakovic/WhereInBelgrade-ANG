import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, FormControl } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap";
import { AlertifyService } from "../_services/alertify.service";
import { DogadjajService } from "../_services/dogadjaj.service";
import { Dogadjaj } from "../_model/dogadjaj";
import { Mesto } from "../_model/mesto";
import { Kategorija } from "../_model/kategorija";
import { KategorijaService } from '../_services/kategorija.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterEvent, ActivatedRoute } from '@angular/router';
import { InsertMestoModalComponent } from '../insert-mesto-modal/insert-mesto-modal.component';
import { MestoService } from '../_services/mesto.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from '../_services/auth.service';
import { async } from '@angular/core/testing';
import { KategorijeComponent } from '../dogadjaji/kategorije/kategorije.component';

@Component({
  selector: "app-insert-event",
  templateUrl: "./insert-event.component.html",
  styleUrls: ["./insert-event.component.css"],
})
export class InsertEventComponent implements OnInit {
  insertForm: FormGroup;
  bsConfig1: Partial<BsDatepickerConfig>;
  bsConfig2: Partial<BsDatepickerConfig>;
  dogadjaj: Dogadjaj;
  mesta: Mesto[];
  kategorije: Kategorija[];
  @ViewChild(InsertMestoModalComponent) insertMesto;
  photoUrl: any;
  imageName = '';
  file: File;

  constructor(
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private mestoService: MestoService,
    private cd: ChangeDetectorRef,
    private dogadjajService: DogadjajService,
    private authService: AuthService
  ) {
  }


  ngOnInit() {
    // postavlja vrednosti koje ucitamo preko resolvera, lista mesta i lista kategorija
    this.route.data.subscribe(data => {
      this.kategorije = data['kategorije'];
      this.mesta = data['mesta'];
    });

    // postavljamo vrednost minimalnog datuma, da ne može da bude neki datum pre današnjeg
    this.bsConfig1 = {
      minDate: new Date(),
    };

    // poziv metode za kreiranje naše forme
    this.createInsertForm();
  }

  // metoda za kreiranje forme
  createInsertForm() {
    this.insertForm = this.fb.group({
      naziv: ["", Validators.required],
      opis: ["", Validators.required],
      datumPocetka: [null, Validators.required],
      vremePocetka: [null, Validators.required],
      datumZavrsetka: [null, Validators.required],
      vremeZavrsetka: [null, Validators.required],
      kategorije: new FormArray([], this.minSelectedCheckboxes(1)),
      mesto: [this.mesta[0].mestoID, Validators.required],
      image: [null, Validators.required]
    }, {validator: this.dateTimeValidator});

    // dodaje elemente u formArray vezane za kategorije
    this.addCheckboxes();
  }

  // metoda koja se poziva kada se odabere fajl ili kada se doda neki novi fajl u fajl inputu
  onFileChange(event) {
    const reader = new FileReader();
   
    // proverava da li imamo učitan neki fajl
    if( event.target.files && event.target.files.length ) {
      const [secFile] = event.target.files;
      const file = event.target.files[0];
      reader.readAsDataURL(secFile);

      // čuvamo naš fajl u ovoj varijabli, kako bismo ga kasnije prosledili u naš api
      this.file = file;
      // čuvamo ime našeg fajla u ovoj varijabli, koju pozivamo, kako bismo ga prikazali tamo kad se učita
      this.imageName = file.name;
    
      reader.onload = () => {
        // ova varijabla služi za prikazivanje novoučitane slike, zbog toga i koristimo reader ovaj
        this.photoUrl = reader.result;

        // ovo ne znam šta je, iskreno
        this.cd.markForCheck();
      };

    }
  }


  // metoda koja dodaje u onaj FormArray vrednosti za naše kategorije
   addCheckboxes() {
    if(this.kategorije !== undefined){
      this.kategorije.forEach((o, i) => {
        const control = new FormControl(i === 0); // if first item set to true, else false
        (this.insertForm.controls.kategorije as FormArray).push(control);
        console.log(control);
      });
    }
  }


   // validator za kategorije, mora da bude minimalno jedna kategorija čekirana, ako nije onda nije zadovoljeno
   minSelectedCheckboxes(min = 1){
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }


  // vraća nam indekse iz našeg niza this.kategorije onih kategorija koje su čekirane u checkbox-u
  getSelected(){
    const selektovaneKategorije = this.insertForm.value.kategorije
      .map((v, i) => (v ? this.kategorije[i].kategorijaID : null))
      .filter(v => v !== null);
    return selektovaneKategorije;
  }

  // vraća nam listu kategorija koje su čekirane, ukoliko im prosledimo indekse, koje dobijemo iz prethodne metode
  private getKategorije(indexi: number[]): Kategorija[]{
    let kate: Kategorija[] = [];
    for (const i of indexi) {
      kate.push(this.kategorije[i-1]);
    }
    return kate;
  }

  // proverava datum, nešto malo baguje iskreno rešiću to u jednom trenutku
  dateTimeValidator(g: FormGroup) {
    const datumPocetka: Date = g.get("datumPocetka").value;
    const vremePocetka: Date = g.get("vremePocetka").value;
    const datumZavrsetka: Date = g.get("datumZavrsetka").value;
    const vremeZavrsetka: Date = g.get("vremeZavrsetka").value;

    if ( datumPocetka === null ) return null;
    if ( vremePocetka === null ) return null;
    if ( datumZavrsetka === null ) return null;
    if  (vremeZavrsetka === null ) return null;
    // datumPocetka.setHours(0,0,0,0);
    // datumZavrsetka.setHours(0,0,0,0);
    // if(datumPocetka > datumZavrsetka) return {'date-err': true};
    // if( datumPocetka === datumZavrsetka && vremePocetka >= vremeZavrsetka) return {'date-err': true};
    // return null;
    const ukupniPocetak = new Date(
      datumPocetka.getFullYear(),
      datumPocetka.getMonth(),
      datumPocetka.getDate(),
      vremePocetka.getHours(),
      vremePocetka.getMinutes()
    );

    const ukupniKraj = new Date(
      datumZavrsetka.getFullYear(),
      datumZavrsetka.getMonth(),
      datumZavrsetka.getDate(),
      vremeZavrsetka.getHours(),
      vremeZavrsetka.getMinutes()
    );

    console.log('Pocetak: ' + ukupniPocetak);
    console.log('Kraj:' + ukupniKraj);

    return (ukupniPocetak < ukupniKraj) ? null : {'date-err': true};
  }

  // funkcija za kreiranje sadržaja koji šaljemo apiju i pozivanje apija
  insertEvent() {
    if(!this.insertForm.valid) { return; }

    const formData = new FormData();
    formData.append('naziv', this.insertForm.get('naziv').value);
    formData.append('opis', this.insertForm.get('opis').value);

    const datumPocetka: Date = this.generateDatumPocetka();
    const datumZavrsetka: Date = this.generateDatumZavrsetka();

    formData.append('datumPocetka', datumPocetka.toUTCString());
    formData.append('datumZavrsetka', datumZavrsetka.toUTCString());
    formData.append('mestoID', this.insertForm.get('mesto').value);
    for (const kat of this.getKategorije(this.getSelected())) {
      formData.append('kategorija' + kat.kategorijaID, kat.kategorijaID.toString());
    }
    formData.append('image', this.file);
    this.useService(formData);
    
  }

  // funkcija koja konkretno poziva naš api, i prosleđuje mu sadržaj
  private useService(formData: FormData){
    this.dogadjajService.insertEvent(this.authService.decodedToken.nameid, formData)
    .subscribe(()=> {
      this.alertify.success('Uspešno ste objavili događaj');
      // ukoliko je uspešno objavljen događaj, onda reloaduje formu
      this.reloadForm();
    }, error => {
      this.alertify.error(error);
    })
  }

  // reloadovanje forme
   private reloadForm(){
    this.photoUrl = null;
    this.imageName = null;
    this.bsConfig1 = {
      minDate: new Date(),
    };

    this.insertForm.reset({
      naziv : null,
      opis: null,
      datumPocetka: null,
      vremePocetka: null,
      datumZavrsetka: null,
      vremeZavrsetka: null,
      kategorije: null,
      mesto: null,
      image: null
    });
  }


  // generiše datum početka
  private generateDatumPocetka(){
    const datumPocetka: Date = this.insertForm.get("datumPocetka").value;
    const vremePocetka: Date = this.insertForm.get("vremePocetka").value;

    const ukupniPocetak = new Date(
      datumPocetka.getFullYear(),
      datumPocetka.getMonth(),
      datumPocetka.getDate(),
      vremePocetka.getHours(),
      vremePocetka.getMinutes()
    );
    return ukupniPocetak;
  }

  // generiše datum završetka
  private generateDatumZavrsetka(){
    const datumZavrsetka: Date = this.insertForm.get("datumZavrsetka").value;
    const vremeZavrsetka: Date = this.insertForm.get("vremeZavrsetka").value;

    const ukupniKraj = new Date(
      datumZavrsetka.getFullYear(),
      datumZavrsetka.getMonth(),
      datumZavrsetka.getDate(),
      vremeZavrsetka.getHours(),
      vremeZavrsetka.getMinutes()
    );

    return ukupniKraj;
  }

  // funkcija koja postavlja datepicker tako da vrednosti završetka ne mogu da budu one pre vrednosti početka
  setOtherDateTimePicker() {
    this.bsConfig2 = {
      minDate: this.insertForm.get("datumPocetka").value,
    };
  }

  // poziva modal da nam otvori da kreiramo novo mesto
  createNewMesto(){
    this.insertMesto.showComponent();
  }

  // ova funkcija se poziva kada je novo mesto kreirano i samo poziva api da ponovo učita mesta
  reloadMesta(ret: boolean) {
    if(ret){
      this.mestoService.getAllMesta().subscribe((mesta: Mesto[]) => {
        this.mesta = mesta;
      }, error => {
        this.alertify.error(error);
      });
    }
  }
}
