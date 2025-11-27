import { Component } from '@angular/core';

@Component({
  selector: 'app-all-medicine',
  templateUrl: './all-medicine.component.html',
  styleUrls: ['./all-medicine.component.css']
})
export class AllMedicineComponent {

  public buttonHeading:any = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','ALL'];
 

  public medicineA = [
    {routepath: "ADHD", category : "ADHD (8)"},
    {routepath: "Acne", category : "Acne (373)"},
    {routepath: "Alcohol Addiction", category : "Alcohol Addiction (15)"},
    {routepath: "Allergies", category : "Allergies (801)"},
    {routepath: "Alzheimer", category : "Alzheimer (96)"},
    {routepath: "Amoebiasis", category : "Amoebiasis (11)"},
    {routepath: "Anaemia", category : "Anaemia (99)"},
    {routepath: "Anaesthesia - Local", category : "Anaesthesia - Local (74)"},
    {routepath: "Anaesthesia - General", category : "Anaesthesia General (4)"},
    {routepath: "Anal Fissure", category : "Anal Fissure (3)"},
    {routepath: "#", category : "Angina (214)"},
    {routepath: "#", category : "Anti allergic (0)"},
    {routepath: "#", category : "Anti-Scar (0)"},
    {routepath: "#", category : "Antibiotic (4)"},
    {routepath: "#", category : "Anxiety (45)"},
    {routepath: "#", category : "Apnea (1)"},
    {routepath: "#", category : "Appetite (44)"},
    {routepath: "#", category : "Arrhythmiasis (31)"},
    {routepath: "#", category : "Arthritis (165)"},
    {routepath: "#", category : "Asthma/COPD (742)"},
    {routepath: "#", category : "Atopic Dermatitis(Eczema) (90)"},
    {routepath: "#", category : "Auto Immune Disease (209)"},
    {routepath: "#", category : "Ayurvedic Medicine (99)"}
    ]

  public medicineB =
    ['Bacterial Infections (2638)',
      'Bladder And Prostate Disorders (412)',
      'Bleeding Disorders (122)',
      'Blood Clot (623)',
      'Bone Metabolism (32)',
      'Burns (7)'];

  public medicineC = [
    'CNS stimulants (0)',
    'Cancer Oncology (429)',
    'Cardiac Arrest (3)',
    'Cerebral Ischemic Stroke (0)',
    'Cholelithiasis/Gall Stones (112)',
    'Cleanser (167)',
    'Colon Cleanser (0)',
    'Constipation (280)',
    'Contraception (67)',
    'Cough And Cold (756)',
    'Crack (0)'];

  public medicineD =
    ['Dandruff (87)',
      'Denture Adhesive (3)',
      'Depression (555)',
      'Dewormer (0)',
      'Diabetes (3866)',
      'Diagnostic (6)',
      'Diarrhoea (253)',
      'Dietary Management (0)',
      'Digestion (126)',
      'Dry Eye (225)',
      'Dry Skin (639)'];

  public medicineE =
    ['Ear Conditions (58)',
      'Ectoparasiticide (0)',
      'Electrolytes (0)',
      'Epilepsy/Convulsion (826)',
      'Eye Infections (366)',
      'Eye conditions (215)'];

  public medicineF =
    ['Fever (245)',
      'Fungal (3)',
      'Fungal Infections (1139)'];

  public medicineG =
    ['GERD(Gastroesophageal Riflux Disease) (49)',
      'Gastro Intestinal Motility Disorders (41)',
      'General-P (4)',
      'Glaucoma (168)',
      'Gout (98)'];

  public medicineH =
    ['H.Pylori Infection (16)',
      'Haematopoiesis (3)',
      'Haemorrhoid (40)',
      'Hair Color - P (6)',
      'Hair Loss (320)',
      'Head Lice (2)',
      'Heart Failure (113)',
      'Hepatitis B Infection (0)',
      'High Cholesterol (1073)',
      'Hirsutism (1)',
      'Hormonal Therapy (660)',
      'Hyperpigmentation (179)',
      'Hypertension (3233)',
      'Hyperthyroidism (22)',
      'Hypnosis (5)',
      'Hyponatremia (16)',
      'Hypotension (29)',
      'Hypothyroidism (105)'];

  public medicineI =
    ['Idiopathic Pulmonary Fibrosis (31)',
      'Immune Sera (1)',
      'Immune Suppression (42)',
      'Immunoglobulins (2)',
      'Impotence/Erectile Dysfunction (Ed) (133)',
      'Infection (0)',
      'Inhaler/Nebulizer (0)',
      'Insulin Pen (Device) (0)',
      'Intermittent Claudication (25)',
      'Iron Supplement/Anaemia (279)',
      'Itching/Dry Skin (14)'];

  public medicineK =
    ['Kidney Disease/Stones (147)'];


  public medicineL =
    ['LYMPHOEDEMA (0)',
      'Leprosy (3)',
      'Liver Disease (75)',
      'Liver Supplement (0)',
      'Lubrication (0)'];


  public medicineM =
    ['Malarial (89)',
      'Melasma (6)',
      'Migraine (123)',
      'Mucolytic Agent (4)',
      'Multiple Sclerosis (9)',
      'Muscle Cramps/Spasticity (217)',
      'Muscle Spasm (235)',
      'Myasthenia Gravis (7)',
      'Mydriasis (30)'];

  public medicineN =

    ['Nappy Rash (6)',
      'Nasal Congestion (216)',
      'Neuropathic Pain (707)',
      'Nootropics And Neurotrophics (170)'];


  public medicineO =
    ['Obese (2)',
      'Obesity (18)',
      'Oral Care - P (246)',
      'Osteoporosis (47)'];


  public medicineP =
    ['Pain relief (1442)',
      'Parasitic Worms (97)',
      'Parkinsonism (120)',
      'Patanjali Ayurvedic (0)',
      'Pen (Device) (0)',
      'Peripheral Hypertension (12)',
      'Peripheral Vascular Disease (10)',
      'Poisoning/Overdose (38)',
      'Polycystic ovary syndrome(PCOS) (5)',
      'Pregnancy Testing Kit (3)',
      'Premature Ejaculation (3)',
      'Psoriasis (6)',
      'Psoriasis/Seborrhea/Ichthyosis (97)',
      'Psychosis (115)',
      'Pulmonary Arterial Hypertension (Pah) (3)'];


  public medicineR =
    ['Rabies (1)',
      'Rheumatoid Arthritis (61)'];

  public medicineS =
    ['Sanitizer (0)',
      'Scabies (64)',
      'Scar (19)',
      'Schizophrenia (431)',
      'Skin Infections (855)',
      'Sleep Disorder (Insomnia) (3)',
      'Smoking cessation (19)',
      'Stretch Marks (12)',
      'Sun Protectors (44)',
      'Sunscreen Preparations (94)',
      'Supplements (3519)',
      'Surgicals (41)',
      'Syringe (0)'];


  public medicineT =
    ['Targeted Cancer Therapy (0)',
      'Tetanus (1)',
      'Thrombotic Disorder (1)',
      'Tuberculosis (Tb) (0)'];

  public medicineU =
    ['Ulcer/Reflux/Flatulence (1174)',
      'Ulcerative Colitis (117)',
      'Urinary Retention (28)',
      'Uterus Conditions (32)',
      'Uti Infections (8)'];


  public medicineV =
    ['Vaccines (2)',
      'Vaginal Capsules (1)',
      'Vaginal Conditions (33)',
      'Varicose Veins (28)',
      'Vertigo (176)',
      'Veterinary-Pharma (243)',
      'Viral infections (203)',
      'Vitamin B12 (0)',
      'Vitamin C/Supplements (0)',
      'Vitamin D3 (0)',
      'Vitamin E (0)',
      'Vitiligo (14)',
      'Vomitting/Emesis (186)'];


  public medicineW =
    ['Warts/Calluses/Other Skin Lesion (18)',
      'Weight Loss (Pharma) (0)',
      'Wound Care (133)',
      'Wrinkle/Anti Ageing (21)'];

}

