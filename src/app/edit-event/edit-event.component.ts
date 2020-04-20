import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Dogadjaj } from '../_model/dogadjaj';
import { Mesto } from '../_model/mesto';
import { Kategorija } from '../_model/kategorija';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { MestoService } from '../_services/mesto.service';
import { DogadjajService } from '../_services/dogadjaj.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editForm: FormGroup;
  bsConfig1: Partial<BsDatepickerConfig>;
  bsConfig2: Partial<BsDatepickerConfig>;
  dogadjaj: Dogadjaj;
  mesta: Mesto[];
  kategorije: Kategorija[];
  @ViewChild(EditEventComponent) insertMesto;
  photoUrl: any;
  imageName = '';
  file: File;
  eventForEdit: Dogadjaj;
  datum1: Date;
  datum2: Date;
  pocetneKategorije: Kategorija[];

  constructor(
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private mestoService: MestoService,
    private cd: ChangeDetectorRef,
    private dogadjajService: DogadjajService,
    private authService: AuthService
  ) {  }

  ngOnInit() {
    // postavlja vrednosti koje ucitamo preko resolvera, lista mesta i lista kategorija
    this.route.data.subscribe(data => {
      this.kategorije = data['kategorije'];
      this.mesta = data['mesta'];
      this.eventForEdit = data['dogadjaj'];
    });

    // postavljamo vrednost minimalnog datuma, da ne može da bude neki datum pre današnjeg
    this.bsConfig1 = {
      minDate: new Date(),
    };

    this.setDateAndTime();
    this.photoUrl = this.eventForEdit.url;
    this.pocetneKategorije = this.eventForEdit.kategorije;
    this.createInsertForm();
  }

  // metoda za kreiranje forme
  createInsertForm() {
    this.editForm = this.fb.group({
      naziv: [this.eventForEdit.naziv, Validators.required],
      opis: [this.eventForEdit.opis, Validators.required],
      datumPocetka: [this.datum1, Validators.required],
      vremePocetka: [this.datum1, Validators.required],
      datumZavrsetka: [this.datum2, Validators.required],
      vremeZavrsetka: [this.datum2, Validators.required],
      kategorije: new FormArray([], this.minSelectedCheckboxes(1)),
      mesto: [this.eventForEdit.lokacija.mestoID, Validators.required],
      image: [null]
    }, {validator: this.dateTimeValidator});

    // dodaje elemente u formArray vezane za kategorije
    this.addCheckboxes();
  }

  setDateAndTime(){
    this.datum1 = new Date(this.eventForEdit.datumPocetka);
    this.datum2 = new Date(this.eventForEdit.datumZavrsetka);
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
    if(this.kategorije !== undefined) {
      this.kategorije.forEach((o, i) => {
        let control = null;
        this.pocetneKategorije.forEach( kat => {
          if(i === (kat.kategorijaID - 1)) {
            control = new FormControl(true);
          }
           // if first item set to true, else false
          // console.log(i, kat.kategorijaID)
        });
        if (control === null) {
          control = new FormControl(false);
        }
        (this.editForm.controls.kategorije as FormArray).push(control);
      });
    }
  }


   // validator za kategorije, mora da bude minimalno jedna kategorija čekirana, ako nije onda nije zadovoljeno
   minSelectedCheckboxes(min = 1) {
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
  getSelected() {
    const selektovaneKategorije = this.editForm.value.kategorije
      .map((v, i) => (v ? this.kategorije[i].kategorijaID : null))
      .filter(v => v !== null);
    return selektovaneKategorije;
  }

  // vraća nam listu kategorija koje su čekirane, ukoliko im prosledimo indekse, koje dobijemo iz prethodne metode
  private getKategorije(indexi: number[]): Kategorija[] {
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

    // console.log('Pocetak: ' + ukupniPocetak);
    // console.log('Kraj:' + ukupniKraj);

    return (ukupniPocetak < ukupniKraj) ? null : {'date-err': true};
  }

  // funkcija za kreiranje sadržaja koji šaljemo apiju i pozivanje apija
  editEvent() {
    if (!this.editForm.valid) {
      this.alertify.message("Niste popunili sva obavezna polja!");
      return;
    }
    if (!this.editForm.dirty) {
      this.alertify.message("Niste promenili ni jedan podatak o događaju!");
      return;
    }

    const formData = new FormData();
    formData.append('dogadjajID', this.eventForEdit.dogadjajID.toString());
    formData.append('naziv', this.editForm.get('naziv').value);
    formData.append('opis', this.editForm.get('opis').value);

    const datumPocetka: Date = this.generateDatumPocetka();
    const datumZavrsetka: Date = this.generateDatumZavrsetka();

    formData.append('datumPocetka', datumPocetka.toUTCString());
    formData.append('datumZavrsetka', datumZavrsetka.toUTCString());
    formData.append('mestoID', this.editForm.get('mesto').value);
    for (const kat of this.getKategorije(this.getSelected())) {
      formData.append('kategorija' + kat.kategorijaID, kat.kategorijaID.toString());
    }
    formData.append('image', this.file);
    this.useService(formData);
  }

  // funkcija koja konkretno poziva naš api, i prosleđuje mu sadržaj
  private useService(formData: FormData) {
    // console.log('usao u useServce');
    this.dogadjajService.editEvent(this.authService.decodedToken.nameid, formData)
    .subscribe(() => {
      this.alertify.success('Uspešno ste izmenili događaj');
      // samo postavlja formu da vise nije dirty
      this.editForm.markAsPristine();
    }, error => {
      this.alertify.error('Greska pri izmeni');
    })
  }

  // reloadovanje forme
   private reloadForm(){
    this.photoUrl = null;
    this.imageName = null;
    this.bsConfig1 = {
      minDate: new Date(),
    };

    this.editForm.reset({
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
    const datumPocetka: Date = this.editForm.get("datumPocetka").value;
    const vremePocetka: Date = this.editForm.get("vremePocetka").value;

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
    const datumZavrsetka: Date = this.editForm.get("datumZavrsetka").value;
    const vremeZavrsetka: Date = this.editForm.get("vremeZavrsetka").value;

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
      minDate: this.editForm.get("datumPocetka").value,
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
