// Saronil Health - Psychiatry Platform Core Logic
// Coordinates state between Doctor EMR and Patient App

// --- INITIAL STATE ---
const INITIAL_STATE = {
  patients: [
    {
        "id": "pat-1",
        "uhid": "SH-2025-001",
        "name": "Rajesh Kumar",
        "age": 45,
        "gender": "Male",
        "dob": "1981-05-14",
        "bloodGroup": "B+",
        "email": "rajesh.kumar@example.com",
        "mobile": "+91 98765 43210",
        "address": "42/B, 4th Cross, 5th Block, Koramangala, Bengaluru \u2014 560034",
        "occupation": "Practising Physician (MBBS, University Gold Medalist)",
        "maritalStatus": "Married",
        "education": "MBBS, University Gold Medalist",
        "livingArrangement": "Lives with spouse in owned apartment",
        "substanceHistory": {
            "alcohol": "Occasional / Social (abstinent currently \u00d7 3 months)",
            "tobacco": "Never smoked",
            "caffeine": "1\u20132 cups filter coffee/day",
            "other": "None"
        },
        "vitals": {
            "bp": "118/76 mmHg",
            "pulse": "72 bpm",
            "temp": "98.4 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "82 kg",
            "height": "172 cm",
            "bmi": "26.8 kg/m²"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-10",
                "bp": "124/80 mmHg",
                "pulse": "76 bpm",
                "temp": "98.6 \u00b0F",
                "spo2": "99%",
            "weight": "82 kg",
                "bmi": "20.3 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-10",
                "bp": "120/78 mmHg",
                "pulse": "74 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "98%",
                "weight": "59.0 kg",
                "bmi": "19.9 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-24",
                "bp": "118/76 mmHg",
                "pulse": "72 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "58.0 kg",
                "bmi": "19.6 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            }
        ],
        "allergies": "No known drug allergies (NKDA). Mild seasonal dust mite rhinitis.",
        "medicalConditions": "Type 2 Diabetes Mellitus (T2DM), Essential Hypertension (HTN), Dyslipidemia / ASCVD",
        "psychiatricHistory": "Generalized Anxiety Disorder with panic features and somatic hyperarousal. Prior adequate trial of Sertraline.",
        "familyHistory": "Father: Essential Hypertension (HTN) + Type 2 Diabetes Mellitus (T2DM); Mother: Hypothyroidism with anxious traits; Non-consanguineous marriage.",
        "personalHistory": "Full term normal delivery (GA 39 wks, 3.1 kg), achieved age-appropriate milestones. MBBS University Gold Medalist, practising physician. Premorbid traits: Perfectionism, high conscientiousness, somatic hyperarousal.",
        "currentMeds": [
            {
                "id": "m-101",
                "name": "Escitalopram",
                "brand": "Nexito 10",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "Once daily, night (after dinner)",
                "timing": "Night (0-0-1)",
                "duration": "4 weeks",
                "startDate": "2025-06-24",
                "instructions": "Take after food. May cause mild initial nausea or headache.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Major Depressive Disorder",
                "status": "Active"
            },
            {
                "id": "m-102",
                "name": "Clonazepam",
                "brand": "Zapiz 0.5",
                "dose": "0.5 mg",
                "route": "Oral",
                "freq": "Bedtime (short course)",
                "timing": "Bedtime (0-0-1)",
                "duration": "2 weeks only",
                "startDate": "2025-06-24",
                "instructions": "For sleep onset and severe anticipatory anxiety. Taper off after 14 days. Do not stop abruptly.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Initial Insomnia / Anxiety Bridge",
                "status": "Active"
            },
            {
                "id": "m-103",
                "name": "Levothyroxine",
                "brand": "Thyronorm 25",
                "dose": "25 mcg",
                "route": "Oral",
                "freq": "Once daily, empty stomach (morning)",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "startDate": "2023-08-15",
                "instructions": "Take early morning 30 mins before tea/coffee with a full glass of water.",
                "prescriber": "Dr. S. K. Narang (Endocrinology)",
                "indication": "Subclinical Hypothyroidism",
                "status": "Active"
            },
            {
                "id": "m-104",
                "name": "Amlodipine",
                "brand": "Amlopres 5",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "startDate": "2024-01-10",
                "instructions": "Take with water after breakfast.",
                "prescriber": "Dr. P. Venkat (Cardiology)",
                "indication": "Essential Hypertension",
                "status": "Active"
            },
            {
                "id": "m-105",
                "name": "Cholecalciferol (Vit D3)",
                "brand": "Calcirol 60k",
                "dose": "60,000 IU",
                "route": "Oral",
                "freq": "Once weekly with warm milk",
                "timing": "Weekly (Sunday)",
                "duration": "8 weeks",
                "startDate": "2025-06-24",
                "instructions": "Weekly sachet dissolved in warm milk to treat Vitamin D deficiency (16 ng/mL).",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Vitamin D Deficiency",
                "status": "Active"
            }
        ],
        "pastMeds": [],
        "caregiver": {
            "name": "Sunitha Rao",
            "relationship": "Spouse",
            "mobile": "+91 98765 11111",
            "email": "sunitha.rao@gmail.com",
            "address": "42/B, 4th Cross, 5th Block, Koramangala, Bengaluru \u2014 560034",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true,
                "crisisAlerts": true
            }
        },
        "crisisPlan": "Stanley-Brown Safety Protocol Active. Warning signs: Waking up at 4 AM ruminating, thoughts of 'better off dead', withdrawal from Sunitha. Internal coping: 10-min 4-7-8 breathing, balcony walking, listening to Carnatic instrumental. Distraction: Call sister Ananya (+91 98765 11222), walk in Cubbon Park. Helplines: National Tele-MANAS (14416 / 1800 891 4416), iCall (9152987821), Vandrevala (9999 666 555). Lethal means restricted: All OTC & prescription medications locked and dispensed by spouse.",
        "timeline": [
            {
                "date": "2025-05-10",
                "time": "10:00 AM",
                "type": "Assessment",
                "desc": "Initial Baseline Psychometrics",
                "details": "PHQ-9 Score: 21/27 (Severe Depression, Q9=1), GAD-7: 14/21 (Moderate Anxiety)"
            },
            {
                "date": "2025-06-10",
                "time": "09:15 AM",
                "type": "Assessment",
                "desc": "Pre-Intake GAD-7 Completed",
                "details": "Score: 12/21 (Moderate Anxiety)"
            },
            {
                "date": "2025-06-24",
                "time": "08:41 AM",
                "type": "Assessment",
                "desc": "PHQ-9 Pre-Consultation Completed",
                "details": "Score: 18/27 (Moderately Severe Depression, Q9=1 passive death wish)"
            },
            {
                "date": "2025-06-24",
                "time": "09:30 AM",
                "type": "Registration",
                "desc": "Patient registered at Saronil Health",
                "details": "Onboarding & clinical bio-data registration complete"
            },
            {
                "date": "2025-06-24",
                "time": "10:30 AM",
                "type": "Consultation",
                "desc": "Initial Comprehensive Psychiatric Intake with Dr. Riya Sharma",
                "details": "Working diagnosis: Major Depressive Disorder (6A70.1 / F32.1). Initiated Escitalopram 10mg + Clonazepam 0.5mg taper. Initiated CBT referral.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good morning Advait. I am Dr. Riya Sharma. I understand your sister and wife Sunitha encouraged you to come in today. How can I help you?\n[00:08] Patient: Yes, hello doctor. I have just been feeling really low for the past three months. Ever since I lost my job as a product manager during the layoffs, it feels like everything is falling apart.\n[00:18] Doctor: I am sorry to hear about your job. Can you describe what this low mood feels like on a daily basis?\n[00:25] Patient: It is like being underwater. I wake up around 4 AM every single morning with a heavy feeling in my chest and cannot fall back asleep. I have no interest in doing anything, even things I used to love like cycling.\n[00:37] Doctor: That sounds incredibly heavy and exhausting. Are you experiencing any thoughts of suicide or self-harm?\n[00:44] Patient: Sometimes I just feel like it would be easier if I did not wake up at all. But I don't have any plan or intention to end my life. I think about my sister and Sunitha and know I cannot do that.\n[00:54] Doctor: Thank you for sharing that with me. We call those passive suicidal thoughts. We will take this very seriously, build a safety plan, and start treatment. I recommend Escitalopram 10mg to help stabilize the neurotransmitters, and a referral for Cognitive Behavioral Therapy. How do you feel about that plan?\n[01:10] Patient: I am open to anything that helps. I just want to feel like myself again.\n[01:16] Doctor: Absolutely. We will take this step by step. We will start with a weekly check-in."
            }
        ],
        "therapyPlan": {
            "modality": "Cognitive Behavioural Therapy (CBT)",
            "focus": "Negative cognitive schemas, behavioural activation, circadian pacing",
            "freq": "Weekly",
            "status": "Active \u2014 3 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "10\u201312 sessions over 3 months",
            "sessionProgress": "3 of 12 planned",
            "sessionPct": 25,
            "focusAreas": "Activity scheduling \u00b7 Thought records \u00b7 Graded task assignment \u00b7 Sleep scheduling \u00b7 Relapse prevention",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Engagement & CBT Formulation",
                    "meta": "10 Jun 2025 \u00b7 45 min \u00b7 CBT \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Rapport building. Shared CBT model of depression. Psychoeducation about vicious cycle of low mood \u2192 withdrawal \u2192 self-criticism.",
                    "discussion": "Advait engaged well. Identified core cognitive schema: 'If I'm not succeeding professionally, I have zero worth.' Mapped link between 4 AM early morning awakening, brooding, and skipping morning walks. Validated emotional impact of sudden corporate job termination.",
                    "homework": [
                        "Daily Activity Diary (record mastery & pleasure 0-10)",
                        "15-minute gentle morning walk at 7 AM with spouse"
                    ],
                    "progress": "Patient demonstrated good understanding of the cognitive model. Agreed to behavioral activation framework."
                },
                {
                    "title": "Session 2 \u2014 Cognitive Restructuring & Automatic Negative Thoughts",
                    "meta": "17 Jun 2025 \u00b7 50 min \u00b7 CBT \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Review activity diary. Introduce 3-column thought record for identifying cognitive distortions (all-or-nothing thinking, catastrophizing).",
                    "discussion": "Activity diary showed pleasure rating of 4/10 on days with morning walks. Identified hot automatic thought: 'I let my family down, my career is permanently over.' Evaluated evidence for/against this belief. Developed balanced alternative: 'Losing my job in a company-wide layoff does not erase 10 years of successful product management.'",
                    "homework": [
                        "Complete 3-column thought record for 4 AM awakening thoughts",
                        "Schedule two 20-min cycling sessions this week"
                    ],
                    "progress": "Pleasure ratings improved from 1/10 to 4/10 on walking days. Suicidal ideation frequency decreased."
                },
                {
                    "title": "Session 3 \u2014 Behavioral Activation & Morning Pacing",
                    "meta": "24 Jun 2025 \u00b7 50 min \u00b7 CBT \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Consolidate behavioral momentum. Address avoidance behavior around professional networking.",
                    "discussion": "Reviewed thought records. Advait cycled 5 km on Saturday with spouse; reported mood elevation to 5/10. Explored anxiety regarding LinkedIn networking. Broken down into graded exposure steps: 1) Update profile headline (completed in session), 2) Message one former colleague.",
                    "homework": [
                        "Send 1 message to former colleague",
                        "Maintain 11 PM to 7 AM sleep hygiene window",
                        "Pleasant events scheduling"
                    ],
                    "progress": "PHQ-9 score down from 21 to 18. Cognitive flexibility improving. High engagement."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-24",
                "time": "10:30 AM",
                "duration": "45 min",
                "type": "Initial Comprehensive Psychiatric Intake",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Depressed mood \u00d7 3 months",
                    "Early morning awakening at 4 AM",
                    "Anhedonia",
                    "Psychomotor slowing",
                    "Passive suicidal thoughts ('wish I didn't wake up')"
                ],
                "notes": "34-year-old male Senior Product Manager presenting with 3-month major depressive episode following corporate restructuring. Severe anhedonia, sleep architecture fragmentation, feelings of worthlessness. Strong protective alliance with wife Sunitha and sister Ananya.",
                "diagnosis": "Major Depressive Disorder, Single Episode, Moderate-Severe (ICD-11: 6A70.1 / ICD-10: F32.1)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Well-kempt, dressed in casual shirt, dark circles under eyes",
                        "isGood": true
                    },
                    {
                        "key": "Psychomotor Activity",
                        "val": "Reduced psychomotor activity, delayed response latency",
                        "isGood": false
                    },
                    {
                        "key": "Speech",
                        "val": "Slow rate, low volume, coherent, goal-directed",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'depressed, heavy', Affect constricted, tearful during job loss discussion",
                        "isGood": false
                    },
                    {
                        "key": "Thought Content",
                        "val": "Feelings of failure, passive death wishes, denies active plan/intent",
                        "isGood": false
                    },
                    {
                        "key": "Perception",
                        "val": "No perceptual abnormalities or hallucinations",
                        "isGood": true
                    },
                    {
                        "key": "Cognitive / Insight",
                        "val": "Alert, oriented \u00d73, concentration mildly impaired on Serial 7s, Insight Grade 5/6",
                        "isGood": true
                    }
                ],
                "risk": "Low-Moderate Acute Risk \u00b7 High Longitudinal Vulnerability (Paternal Bipolar History). Passive suicidal ideation without intent or preparatory acts.",
                "treatment": "1. Initiated Escitalopram 10mg OD night. 2. Clonazepam 0.5mg bedtime \u00d7 14 days (taper). 3. Referred to Dr. Sneha Patil for weekly CBT. 4. Prescribed Cholecalciferol 60k IU weekly \u00d7 8w for Vitamin D deficiency (16 ng/mL). 5. Stanley-Brown Crisis Safety Plan established with spouse.",
                "badges": [
                    "Moderate-Severe",
                    "Q9: +ve Passive SI",
                    "CBT Referral",
                    "Blood Panel Ordered"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good morning Advait. I am Dr. Riya Sharma. I understand your sister and wife Sunitha encouraged you to come in today. How can I help you?\n[00:08] Patient: Yes, hello doctor. I have just been feeling really low for the past three months. Ever since I lost my job as a product manager during the layoffs, it feels like everything is falling apart.\n[00:18] Doctor: I am sorry to hear about your job. Can you describe what this low mood feels like on a daily basis?\n[00:25] Patient: It is like being underwater. I wake up around 4 AM every single morning with a heavy feeling in my chest and cannot fall back asleep. I have no interest in doing anything, even things I used to love like cycling.\n[00:37] Doctor: That sounds incredibly heavy and exhausting. Are you experiencing any thoughts of suicide or self-harm?\n[00:44] Patient: Sometimes I just feel like it would be easier if I did not wake up at all. But I don't have any plan or intention to end my life. I think about my sister and Sunitha and know I cannot do that.\n[00:54] Doctor: Thank you for sharing that with me. We call those passive suicidal thoughts. We will take this very seriously, build a safety plan, and start treatment. I recommend Escitalopram 10mg to help stabilize the neurotransmitters, and a referral for Cognitive Behavioral Therapy. How do you feel about that plan?\n[01:10] Patient: I am open to anything that helps. I just want to feel like myself again.\n[01:16] Doctor: Absolutely. We will take this step by step. We will start with a weekly check-in."
            },
            {
                "id": "consult-2",
                "date": "2025-07-08",
                "time": "11:00 AM",
                "duration": "30 min",
                "type": "2-Week Psychiatric Review & Pharmacotherapy Follow-up",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person · Room 204",
                "complaints": [
                    "Follow-up evaluation at 2 weeks",
                    "Significant improvement in 4 AM early awakening",
                    "Mild morning grogginess mitigating after 9 AM",
                    "Anhedonia improving; resumed light recreational cycling"
                ],
                "notes": "Patient attended scheduled 14-day medication follow-up accompanied by spouse Sunitha. High pharmacotherapy adherence (98%). Transient Day 1-4 nausea completely resolved. Significant vegetative improvement with total sleep time expanded to 6.5 hours. Passive suicidal ideation on PHQ-9 Q9 fully resolved (Score 0). Initiated planned taper of Clonazepam 0.5mg to 0.25mg for 7 days then discontinue. Advised continuation of Escitalopram 10mg OD night and weekly CBT with Dr. Sneha Patil.",
                "diagnosis": "Major Depressive Disorder, Single Episode, Moderate-Severe — In Early Partial Remission (ICD-11: 6A70.1 / ICD-10: F32.1)",
                "mse": [
                    { "key": "Appearance", "val": "Neatly groomed, brighter affect, spontaneous warm smile", "isGood": true },
                    { "key": "Psychomotor Activity", "val": "Normal psychomotor activity, responsive posture", "isGood": true },
                    { "key": "Speech", "val": "Spontaneous, normal rate, volume, and latency", "isGood": true },
                    { "key": "Mood & Affect", "val": "Mood 'much lighter, feeling hopeful', Affect reactive and congruent", "isGood": true },
                    { "key": "Thought Content", "val": "Constructive focus on routine and career pivot; denies death wishes or self-harm", "isGood": true },
                    { "key": "Perception", "val": "No perceptual disturbances or hallucinations", "isGood": true },
                    { "key": "Cognitive / Insight", "val": "Alert, oriented ×3, concentration normal on Serial 7s, Insight Grade 6/6 (Full insight)", "isGood": true }
                ],
                "risk": "Low Acute Risk · High Protective Factors (Active spouse engagement, CBT underway, job search re-engaged). Passive suicidal ideation completely remitted.",
                "treatment": "1. Continue Tab. Escitalopram 10mg OD Night. 2. Taper Tab. Clonazepam to 0.25mg HS × 7 days then stop completely. 3. Continue weekly CBT with Dr. Sneha Patil (Session 4 scheduled). 4. Continue Cap. Cholecalciferol 60k IU weekly (Course Week 3/8). 5. Re-evaluate in 4 weeks.",
                "badges": [
                    "Partial Remission",
                    "Clonazepam Taper",
                    "SI Resolved",
                    "CBT Ongoing"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Welcome back Advait. It is wonderful to see you looking more energetic and alert today. How has the past fortnight been since our initial evaluation and starting Escitalopram?\n[00:09] Patient: Hello Dr. Sharma. It has actually been much better. The initial nausea went away after about four days, and I am finally sleeping past 6 AM instead of waking up in a panic at 4 AM.\n[00:20] Doctor: That is tremendous clinical progress. How are the mornings feeling with the Clonazepam?\n[00:25] Patient: A bit sluggish until around 9 AM, but quite manageable. Sunitha and I have kept all medications in the lockbox as we planned.\n[00:32] Doctor: Excellent adherence. Because you have now completed the initial 14 days, we will taper the Clonazepam down to half a tablet (0.25mg) at bedtime for one week, and then discontinue it completely. We will maintain Escitalopram at 10mg.\n[00:46] Patient: That sounds very reassuring doctor. My CBT sessions with Dr. Sneha Patil have also really helped me start cycling again and updating my resume.\n[00:55] Doctor: That is fantastic. Keep up the behavioral activation, and we will do our next psychiatric check-in in 4 weeks."
            }
        ]
    },
    {
        "id": "pat-2",
        "uhid": "SH-2025-002",
        "name": "Dr. Anjali Deshmukh",
        "age": 38,
        "gender": "Female",
        "dob": "1988-11-20",
        "bloodGroup": "O+",
        "email": "dr.anjali.deshmukh@gmail.com",
        "mobile": "+91 98765 67890",
        "address": "Flat 802, Sea Green Apts, Perry Cross Road, Bandra West, Mumbai \u2014 400050",
        "occupation": "Consultant Pediatrician (Lilavati Hospital)",
        "maritalStatus": "Married",
        "education": "MBBS, MD (Pediatrics)",
        "livingArrangement": "Lives with spouse and two children (ages 8 and 5)",
        "substanceHistory": {
            "alcohol": "Never",
            "tobacco": "Never",
            "caffeine": "1 cup green tea/day",
            "other": "None"
        },
        "vitals": {
            "bp": "122/78 mmHg",
            "pulse": "76 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "54 kg",
            "height": "161 cm",
            "bmi": "20.8 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-15",
                "bp": "132/84 mmHg",
                "pulse": "88 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "55.0 kg",
                "bmi": "21.2 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-12",
                "bp": "126/80 mmHg",
                "pulse": "82 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "54.5 kg",
                "bmi": "21.0 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-24",
                "bp": "122/78 mmHg",
                "pulse": "76 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "54.0 kg",
                "bmi": "20.8 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            }
        ],
        "allergies": "Sulfonamides (erythematous cutaneous rash). No food allergies.",
        "medicalConditions": "Cervical muscle spasms / Tension Headaches secondary to somatic anxiety. No cardiovascular or endocrine disease.",
        "psychiatricHistory": "Mild situational test anxiety during MD residency. No prior psychiatric hospitalizations or pharmacotherapy.",
        "familyHistory": "Mother treated for Generalized Anxiety Disorder and Essential Tremor; Maternal grandfather had Parkinson's disease.",
        "personalHistory": "High academic and clinical achiever. Perfectionistic, hyper-responsible, difficulties delegating clinical tasks.",
        "currentMeds": [
            {
                "id": "m-201",
                "name": "Sertraline",
                "brand": "Sertima 50",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "startDate": "2025-05-01",
                "instructions": "Take with water after breakfast. Maintain daily regularity.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Generalized Anxiety Disorder",
                "status": "Active"
            },
            {
                "id": "m-202",
                "name": "Pregabalin",
                "brand": "Pregalin 75",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "4 weeks",
                "startDate": "2025-05-01",
                "instructions": "Take at bedtime for somatic muscle tension and initial sleep latency.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Somatic Anxiety & Muscle Spasms",
                "status": "Active"
            },
            {
                "id": "m-203",
                "name": "Propranolol",
                "brand": "Ciplar 10",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "SOS (max 2 tabs/week)",
                "timing": "SOS",
                "duration": "As needed",
                "startDate": "2025-05-15",
                "instructions": "Take 30 mins before large pediatric grand rounds if autonomic tremors peak.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Situational Performance Tremor",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Sertraline 25 mg",
                "duration": "2 weeks (titrated to 50mg on 2025-05-01)",
                "reason": "Standard starting dose titration"
            }
        ],
        "caregiver": {
            "name": "Sanjay Deshmukh",
            "relationship": "Spouse",
            "mobile": "+91 98765 22222",
            "email": "sanjay.deshmukh@gmail.com",
            "address": "Flat 802, Sea Green Apts, Perry Cross Road, Bandra West, Mumbai \u2014 400050",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Low crisis risk. Coping protocol: 4-square box breathing (4s in, 4s hold, 4s out, 4s hold), progressive muscle relaxation, 10-minute break from NICU rounds. Primary support: Spouse Sanjay. Clinic helpline on speed dial.",
        "timeline": [
            {
                "date": "2025-04-15",
                "time": "04:30 PM",
                "type": "Consultation",
                "desc": "Initial Consultation with Dr. Riya Sharma",
                "details": "Presented with severe GAD (GAD-7: 18/21), somatic panic symptoms before hospital rounds. Initiated Sertraline 25mg + Pregabalin 75mg."
            },
            {
                "date": "2025-05-01",
                "time": "05:00 PM",
                "type": "Consultation",
                "desc": "Titration Follow-up with Dr. Riya Sharma",
                "details": "Titrated Sertraline to 50mg OD. Somatic tremors reducing."
            },
            {
                "date": "2025-05-15",
                "time": "05:15 PM",
                "type": "Consultation",
                "desc": "Monthly Review with Dr. Riya Sharma",
                "details": "GAD-7 improved to 14/21. Added Propranolol 10mg SOS for departmental presentations.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Dr. Anjali. How have you been feeling since our last visit?\n[00:06] Patient: Hello Riya. The physical anxiety symptoms are slightly better. The palpitations aren't as intense, but the underlying worry is still persistent.\n[00:15] Doctor: Understood. Are you experiencing the panic attacks during your clinical rounds or meetings?\n[00:21] Patient: Mostly before our weekly pediatric department meetings. I get chest tightness and feel like I cannot breathe.\n[00:29] Doctor: Okay. Have you been using the box breathing techniques we discussed?\n[00:34] Patient: Yes, I use it when the chest tightness starts. It does help bring my pulse rate down, but the catastrophic thoughts about making mistakes still occur.\n[00:43] Doctor: Excellent work on applying the breathing exercises. We will keep Sertraline at 50mg and continue our weekly cognitive restructuring sessions."
            },
            {
                "date": "2025-06-24",
                "time": "09:10 AM",
                "type": "Assessment",
                "desc": "GAD-7 Assessment Completed",
                "details": "Score: 11/21 (Moderate Anxiety, down from baseline 18/21)"
            }
        ],
        "therapyPlan": {
            "modality": "Supportive CBT & Interoceptive Decatastrophizing",
            "focus": "Health anxiety, clinical perfectionism, somatic panic deconditioning",
            "freq": "Bi-weekly",
            "status": "Active \u2014 4 sessions completed",
            "referred": "Dr. Shalini Mukhopadhyay (Clinical Psychologist)",
            "goals": "8 sessions over 4 months",
            "sessionProgress": "4 of 8 planned",
            "sessionPct": 50,
            "focusAreas": "Worry postponement \u00b7 Decatastrophizing \u00b7 Box breathing \u00b7 Interoceptive exposure",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Panic Psychoeducation & Box Breathing",
                    "meta": "02 May 2025 \u00b7 45 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Physiological understanding of fight-or-flight hyperventilation during rounds.",
                    "discussion": "Explained autonomic cascade of hyperventilation \u2192 hypocapnia \u2192 dizziness/chest tightness. Taught 4-square box breathing protocol.",
                    "homework": [
                        "Practice box breathing 3x daily for 5 mins",
                        "Log panic episodes in panic tracker"
                    ],
                    "progress": "Patient embraced physiological explanation, reducing catastrophic fear of heart attack."
                },
                {
                    "title": "Session 2 \u2014 Cognitive Restructuring & Clinical Perfectionism",
                    "meta": "16 May 2025 \u00b7 45 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Identify automatic cognitive errors around clinical decision-making ('I must be 100% infallible').",
                    "discussion": "Examined cognitive distortions. Explored responsibility pie chart: differentiated physician competence from unpredictable clinical outcomes.",
                    "homework": [
                        "Complete responsibility pie chart during case dilemmas",
                        "Worry time 15 mins daily at 6 PM"
                    ],
                    "progress": "Self-criticism reduced. Ability to delegate minor ward duties initiated."
                },
                {
                    "title": "Session 3 \u2014 Interoceptive Exposure & Department Simulation",
                    "meta": "30 May 2025 \u00b7 50 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Deliberate induction of mild tachycardia through voluntary hyperventilation and step-ups.",
                    "discussion": "Conducted in-session interoceptive exposure (60 seconds rapid breathing). Patient experienced mild lightheadedness, recognized it as harmless adrenaline surge.",
                    "homework": [
                        "Repeat 30-second hyperventilation challenge at home 2x/week"
                    ],
                    "progress": "Reduced fear of somatic arousal symptoms."
                },
                {
                    "title": "Session 4 \u2014 Maintenance & Relapse Prevention",
                    "meta": "15 Jun 2025 \u00b7 45 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Review progress on GAD-7, establish maintenance routine for grand rounds.",
                    "discussion": "Reviewed GAD-7 drop from 18 to 11. Dr. Anjali led a 40-minute pediatric mortality meeting without experiencing acute panic or needing Propranolol.",
                    "homework": [
                        "Maintain 15-min daily worry journal",
                        "Continue Sertraline 50mg"
                    ],
                    "progress": "Substantial functional recovery in clinical leadership."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-05-15",
                "time": "05:15 PM",
                "duration": "30 min",
                "type": "Psychiatric Follow-up & Medication Review",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Residual anticipatory worry before pediatric grand rounds",
                    "Palpitations during leadership meetings",
                    "Neck muscle spasms"
                ],
                "notes": "Patient reports significant decrease in baseline panic attacks on Sertraline 50mg + Pregabalin 75mg. GAD-7 decreased to 14/21. Autonomic tremor occurs transiently during public speaking.",
                "diagnosis": "Generalized Anxiety Disorder (ICD-11: 6A71 / ICD-10: F41.1)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Well-dressed in doctor's attire, relaxed posture compared to intake",
                        "isGood": true
                    },
                    {
                        "key": "Psychomotor Activity",
                        "val": "Mild foot tapping, no gross tremors",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Fluent, articulate, normal rate and volume",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'much better, still slightly anxious about presentations', Affect reactive",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Worry regarding public speaking, no suicidal ideation or paranoia",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 6/6 (True emotional insight)",
                        "isGood": true
                    }
                ],
                "risk": "Minimal Risk. No suicidal or self-harm ideation (Q9 = 0).",
                "treatment": "1. Continue Sertraline 50mg OD morning. 2. Continue Pregabalin 75mg bedtime. 3. Added Propranolol 10mg tab SOS 30 mins before major grand rounds (max 2/wk). 4. Continue bi-weekly CBT.",
                "badges": [
                    "Moderate GAD",
                    "Somatic Tension",
                    "Rx Adjusted",
                    "Insight Intact"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Dr. Anjali. How have you been feeling since our last visit?\n[00:06] Patient: Hello Riya. The physical anxiety symptoms are slightly better. The palpitations aren't as intense, but the underlying worry is still persistent.\n[00:15] Doctor: Understood. Are you experiencing the panic attacks during your clinical rounds or meetings?\n[00:21] Patient: Mostly before our weekly pediatric department meetings. I get chest tightness and feel like I cannot breathe.\n[00:29] Doctor: Okay. Have you been using the box breathing techniques we discussed?\n[00:34] Patient: Yes, I use it when the chest tightness starts. It does help bring my pulse rate down, but the catastrophic thoughts about making mistakes still occur.\n[00:43] Doctor: Excellent work on applying the breathing exercises. We will keep Sertraline at 50mg and continue our weekly cognitive restructuring sessions."
            }
        ]
    },
    {
        "id": "pat-3",
        "uhid": "SH-2025-003",
        "name": "Vikram Malhotra",
        "age": 42,
        "gender": "Male",
        "dob": "1983-09-08",
        "bloodGroup": "A+",
        "email": "vikram.malhotra@vcpartners.in",
        "mobile": "+91 98765 99887",
        "address": "B-4/12, Vasant Vihar, New Delhi \u2014 110057",
        "occupation": "Managing Partner (Venture Capital Fund)",
        "maritalStatus": "Divorced",
        "education": "B.A. Economics (St. Stephen's) + MBA (Wharton)",
        "livingArrangement": "Lives with elderly father Devendra Malhotra in family residence",
        "substanceHistory": {
            "alcohol": "Binge drinking history during hypomanic episodes (fully abstinent 4 months)",
            "tobacco": "Smoked in past; quit 2022",
            "caffeine": "1 espresso morning only",
            "other": "None"
        },
        "vitals": {
            "bp": "126/80 mmHg",
            "pulse": "74 bpm",
            "temp": "98.4 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "83 kg",
            "height": "178 cm",
            "bmi": "26.2 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-02",
                "bp": "138/86 mmHg",
                "pulse": "84 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "86.0 kg",
                "bmi": "27.1 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            },
            {
                "date": "2025-06-04",
                "bp": "130/82 mmHg",
                "pulse": "78 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "98%",
                "weight": "84.0 kg",
                "bmi": "26.5 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            },
            {
                "date": "2025-06-24",
                "bp": "126/80 mmHg",
                "pulse": "74 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "83.0 kg",
                "bmi": "26.2 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            }
        ],
        "allergies": "NKDA. No known environmental allergies.",
        "medicalConditions": "Dyslipidemia (managed with Atorvastatin 10mg). No renal, cardiac, or thyroid dysfunction.",
        "psychiatricHistory": "Bipolar II Disorder diagnosed at age 29. Hypomanic episodes in 2021, 2023, and March 2025. Severe depressive crashes post-hypomania. No prior psychotic episodes.",
        "familyHistory": "Paternal uncle died by suicide at age 45; Sister treated for Bipolar Disorder on mood stabilizers.",
        "personalHistory": "High energy baseline, cyclothymic temperament, ambitious, high financial risk-taking during hypomanic phases.",
        "currentMeds": [
            {
                "id": "m-301",
                "name": "Lithium Carbonate SR",
                "brand": "Lithosun SR 400",
                "dose": "400 mg",
                "route": "Oral",
                "freq": "Twice daily (1-0-1, 800mg/day)",
                "timing": "Morning & Night (1-0-1)",
                "duration": "12 weeks",
                "startDate": "2025-05-05",
                "instructions": "Take after meals. Maintain consistent daily water (2.5-3L) and salt intake. Serum lithium level monitoring every 3 months (Target: 0.6\u20130.8 mEq/L).",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Bipolar II Mood Stabilization",
                "status": "Active"
            },
            {
                "id": "m-302",
                "name": "Olanzapine",
                "brand": "Oleanz 5",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "6 weeks",
                "startDate": "2025-06-18",
                "instructions": "Take at bedtime for acute bipolar depressive crash. Monitor fasting blood glucose and lipid panel.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Bipolar Depression Acute Phase",
                "status": "Active"
            },
            {
                "id": "m-303",
                "name": "Atorvastatin",
                "brand": "Atorva 10",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "Continuous",
                "startDate": "2024-03-10",
                "instructions": "Take at bedtime for dyslipidemia.",
                "prescriber": "Dr. A. K. Jain",
                "indication": "Dyslipidemia",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Fluoxetine 20 mg",
                "duration": "3 months (discontinued 2021)",
                "reason": "Triggered hypomanic switch and sleep disruption"
            },
            {
                "name": "Quetiapine 300 mg",
                "duration": "6 months (discontinued 2023)",
                "reason": "Excessive daytime grogginess and 8kg weight gain"
            }
        ],
        "caregiver": {
            "name": "Devendra Malhotra",
            "relationship": "Father",
            "mobile": "+91 98765 33333",
            "email": "devendra.malhotra@gmail.com",
            "address": "B-4/12, Vasant Vihar, New Delhi \u2014 110057",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true,
                "crisisAlerts": true
            }
        },
        "crisisPlan": "Bipolar Safety Contract Active. Warning signs of depressive crash: Sleeping > 11 hrs, skipping calls, feelings of utter ruin. Hypomania signs: Sleeping < 4 hrs, buying luxury watches, talking at 2x speed. Coping: Father holds credit cards and cheque books during hypomanic phase; strict 11 PM bedtime. Helplines: NIMHANS Crisis Line (080-46110007), Tele-MANAS (14416).",
        "timeline": [
            {
                "date": "2025-04-10",
                "time": "11:00 AM",
                "type": "Consultation",
                "desc": "Post-Hypomanic Evaluation with Dr. Vivek Anand",
                "details": "Hypomanic peak resolved. MDQ: 11/13. Commenced Lithium titration."
            },
            {
                "date": "2025-05-02",
                "time": "11:30 AM",
                "type": "Consultation",
                "desc": "Lithium Monitoring with Dr. Riya Sharma",
                "details": "12-hr Serum Lithium trough: 0.76 mEq/L (Therapeutic). Commenced IPSRT therapy."
            },
            {
                "date": "2025-06-18",
                "time": "10:15 AM",
                "type": "Consultation",
                "desc": "Depressive Episode Review with Dr. Riya Sharma",
                "details": "Severe depressive crash (PHQ-9: 22/27, Q9=2). Added Olanzapine 5mg bedtime.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Hello Vikram. It has been two weeks since our last check-in. How are you feeling today?\n[00:06] Patient: Honestly doctor, it is really tough. The high energy from March is completely gone. I can barely get out of bed in the morning, and the guilt over what I did during that high phase is crushing me.\n[00:19] Doctor: I hear you. Coming down from a hypomanic episode into a depressive phase is exhausting and disorienting. Have you been taking the Lithium consistently?\n[00:27] Patient: Yes, my father ensures I take the 400mg twice a day without missing. We got the blood test done, and the level was 0.76.\n[00:36] Doctor: That is an excellent therapeutic level. Because the depressive symptoms are severe right now, with PHQ-9 at 22, I want to add a low dose of Olanzapine at 5mg for the next few weeks to lift this crash. How is your sleep schedule?\n[00:50] Patient: I am sleeping almost 11 hours, but I wake up feeling completely drained. In IPSRT with Dr. Sneha, we are trying to fix my morning wake-up time to 7:30 AM.\n[01:00] Doctor: That consistency is crucial. We will monitor the Olanzapine response and review again next week."
            },
            {
                "date": "2025-06-24",
                "time": "09:55 AM",
                "type": "Assessment",
                "desc": "PHQ-9 Assessment Completed",
                "details": "Score: 22/27 (Severe Depression, Q9=2 active suicide screening trigger)"
            }
        ],
        "therapyPlan": {
            "modality": "Interpersonal and Social Rhythm Therapy (IPSRT)",
            "focus": "Circadian rhythm stabilization, social zeitgebers, hypomania early warning signs",
            "freq": "Weekly",
            "status": "Active \u2014 4 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "8\u201310 sessions over 3 months",
            "sessionProgress": "4 of 8 planned",
            "sessionPct": 50,
            "focusAreas": "Social Rhythm Metric (SRM) \u00b7 Zeitgeber anchoring \u00b7 Hypomania signature identification \u00b7 Interpersonal role transitions",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Introduction to Social Rhythm Therapy",
                    "meta": "12 May 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Psychoeducation on the biological clock and circadian instability in Bipolar II Disorder.",
                    "discussion": "Explained Social Rhythm Metric (SRM). Mapped how March hypomania was preceded by cross-time-zone travel to San Francisco and 3 consecutive nights of 3-hour sleep.",
                    "homework": [
                        "Complete daily SRM chart (log out-of-bed time, first social contact, work start, dinner, in-bed time)"
                    ],
                    "progress": "Patient recognized circadian vulnerability as the physiological trigger of his bipolar shifts."
                },
                {
                    "title": "Session 2 \u2014 Establishing Anchor Zeitgebers",
                    "meta": "26 May 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Anchor strict out-of-bed time at 07:30 AM regardless of sleep duration.",
                    "discussion": "Reviewed SRM data. Out-of-bed time fluctuated from 6:30 AM to 1:00 PM. Established rigid morning zeitgebers: 7:30 AM wake up, morning light exposure on terrace for 20 mins, breakfast at 8:15 AM with father.",
                    "homework": [
                        "Maintain 07:30 AM alarm with father as accountability partner",
                        "No daytime naps > 20 mins"
                    ],
                    "progress": "SRM score improved from 2.1 to 3.8."
                },
                {
                    "title": "Session 3 \u2014 Early Warning Signs (EWS) Action Plan",
                    "meta": "09 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Co-create customized relapse signature checklist for hypomania and depression.",
                    "discussion": "Hypomania signatures identified: Decreased sleep need without fatigue, 10+ WhatsApp messages sent per hour, buying rare fountain pens online. Depression signatures: Turning phone on Do-Not-Disturb, skipping breakfast, dark room. Established 48-hour doctor contact protocol upon 2+ signatures.",
                    "homework": [
                        "Share EWS list with father Devendra",
                        "Continue daily SRM tracking"
                    ],
                    "progress": "Strong collaborative safety framework established with caregiver."
                },
                {
                    "title": "Session 4 \u2014 Crisis Debriefing & Depressive Crash Support",
                    "meta": "23 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Process severe depressive crash; validate feelings of guilt without catastrophic rumination.",
                    "discussion": "Addressed deep shame regarding \u20b918 Lakh impulsive investment made during March hypomania. Worked through guilt versus responsibility. Reaffirmed that hypomania is a biological symptom requiring medical stabilization, not a moral failing.",
                    "homework": [
                        "Gentle 15-minute walk with father at 6 PM",
                        "Maintain SRM chart",
                        "Take Olanzapine 5mg nightly"
                    ],
                    "progress": "Patient felt unburdened. Recommitted to strict daily rhythm."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-18",
                "time": "10:15 AM",
                "duration": "45 min",
                "type": "Psychiatric Evaluation \u2014 Bipolar Depressive Episode",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Severe psychomotor retardation \u00d7 4 weeks",
                    "Hypersomnia (11-12 hours in bed)",
                    "Intense guilt over past hypomania",
                    "Suicidal ideation with passive intent"
                ],
                "notes": "42-year-old male with Bipolar II Disorder presenting in melancholic depressive crash following March hypomania. 12-hour trough serum lithium level is therapeutic at 0.76 mEq/L. High suicide risk due to guilt and hopelessness. Father Devendra present and actively supervising.",
                "diagnosis": "Bipolar II Disorder, Current Episode Depressed, Severe without Psychotic Features (ICD-10: F31.3 / ICD-11: 6A61.1)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Disheveled, unshaven, slumped posture, poor eye contact",
                        "isGood": false
                    },
                    {
                        "key": "Psychomotor Activity",
                        "val": "Severe psychomotor retardation, prolonged speech latency",
                        "isGood": false
                    },
                    {
                        "key": "Speech",
                        "val": "Monosyllabic, low volume, monotonous tone",
                        "isGood": false
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'completely crushed and hopeless', Affect flat, melancholic",
                        "isGood": false
                    },
                    {
                        "key": "Thought Content",
                        "val": "Themes of unworthiness, severe guilt, passive suicidal thoughts (Q9 = 2). Denies active plan.",
                        "isGood": false
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 5/6 (Aware of illness and biological nature)",
                        "isGood": true
                    }
                ],
                "risk": "High Vulnerability / Moderate Acute Risk. Active family supervision by father. Lethal means restricted. Emergency helpline numbers provided.",
                "treatment": "1. Maintain Lithium Carbonate SR 400mg BD (trough 0.76 mEq/L). 2. Added Olanzapine 5mg tab at bedtime. 3. Continue weekly IPSRT with Dr. Sneha Patil. 4. Strict morning wake-up time 7:30 AM. 5. Review in 7 days.",
                "badges": [
                    "Bipolar II",
                    "Melancholic Crash",
                    "Lithium 0.76 mEq/L",
                    "High Caregiver Support"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Hello Vikram. It has been two weeks since our last check-in. How are you feeling today?\n[00:06] Patient: Honestly doctor, it is really tough. The high energy from March is completely gone. I can barely get out of bed in the morning, and the guilt over what I did during that high phase is crushing me.\n[00:19] Doctor: I hear you. Coming down from a hypomanic episode into a depressive phase is exhausting and disorienting. Have you been taking the Lithium consistently?\n[00:27] Patient: Yes, my father ensures I take the 400mg twice a day without missing. We got the blood test done, and the level was 0.76.\n[00:36] Doctor: That is an excellent therapeutic level. Because the depressive symptoms are severe right now, with PHQ-9 at 22, I want to add a low dose of Olanzapine at 5mg for the next few weeks to lift this crash. How is your sleep schedule?\n[00:50] Patient: I am sleeping almost 11 hours, but I wake up feeling completely drained. In IPSRT with Dr. Sneha, we are trying to fix my morning wake-up time to 7:30 AM.\n[01:00] Doctor: That consistency is crucial. We will monitor the Olanzapine response and review again next week."
            }
        ]
    },
    {
        "id": "pat-4",
        "uhid": "SH-2025-004",
        "name": "Aditya Verma",
        "age": 36,
        "gender": "Male",
        "dob": "1989-03-22",
        "bloodGroup": "B+",
        "email": "aditya.verma@salesforce-apac.com",
        "mobile": "+91 98765 44332",
        "address": "Row House 14, Hermes Heritage, Kalyani Nagar, Pune \u2014 411006",
        "occupation": "Enterprise Sales Director (SaaS)",
        "maritalStatus": "Married",
        "education": "B.E. (Mechanical) + Executive MBA",
        "livingArrangement": "Lives with spouse Neha and 4-year-old daughter",
        "substanceHistory": {
            "alcohol": "Moderate-Severe Alcohol Dependence (8-10 units whiskey/day for 6 years); Completed outpatient detox; Currently 28 days abstinent",
            "tobacco": "Smokes 4-5 cigarettes/day (Fagerstr\u00f6m Score: 4)",
            "caffeine": "2 cups tea/day",
            "other": "None"
        },
        "vitals": {
            "bp": "122/78 mmHg",
            "pulse": "74 bpm",
            "temp": "98.4 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "76.8 kg",
            "height": "175 cm",
            "bmi": "25.1 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-20",
                "bp": "142/92 mmHg",
                "pulse": "96 bpm",
                "temp": "98.6 \u00b0F",
                "spo2": "98%",
                "weight": "79.0 kg",
                "bmi": "25.8 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-08",
                "bp": "128/82 mmHg",
                "pulse": "80 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "77.5 kg",
                "bmi": "25.3 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-24",
                "bp": "122/78 mmHg",
                "pulse": "74 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "76.8 kg",
                "bmi": "25.1 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Alcoholic Fatty Liver Disease (Grade 1 steatosis on USG; SGOT/SGPT improving). Mild hyperuricemia.",
        "psychiatricHistory": "Alcohol Use Disorder with past unassisted detox attempts. No prior bipolar, psychotic, or depressive disorders.",
        "familyHistory": "Father had severe chronic alcohol dependence; Paternal uncle with alcoholic liver cirrhosis.",
        "personalHistory": "High-performing corporate sales leader, frequent international business dinners, high stress tolerance until alcohol dependence escalated.",
        "currentMeds": [
            {
                "id": "m-401",
                "name": "Naltrexone",
                "brand": "Naltima 50",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "startDate": "2025-05-28",
                "instructions": "Take after breakfast. Opioid receptor antagonist to suppress alcohol craving pathways. Avoid opioid analgesics.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Alcohol Dependence Anti-Craving",
                "status": "Active"
            },
            {
                "id": "m-402",
                "name": "Thiamine Hydrochloride (Vit B1)",
                "brand": "Benalgis 100",
                "dose": "100 mg",
                "route": "Oral",
                "freq": "Once daily, morning",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "startDate": "2025-05-20",
                "instructions": "Take daily for neuroprotection and Wernicke-Korsakoff syndrome prevention.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Neuroprotection / Alcohol Recovery",
                "status": "Active"
            },
            {
                "id": "m-403",
                "name": "B-Complex with Zinc",
                "brand": "Becozinc",
                "dose": "1 cap",
                "route": "Oral",
                "freq": "Once daily after lunch",
                "timing": "Afternoon (0-1-0)",
                "duration": "12 weeks",
                "startDate": "2025-05-20",
                "instructions": "Nutritional replenishment.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Nutritional Support",
                "status": "Active"
            },
            {
                "id": "m-404",
                "name": "Nicotine Polacrilex Gum",
                "brand": "Nicotex 2mg",
                "dose": "2 mg",
                "route": "Oral (chew & park)",
                "freq": "SOS (max 6 gums/day)",
                "timing": "SOS",
                "duration": "8 weeks",
                "startDate": "2025-06-08",
                "instructions": "Chew slowly until peppery taste, then park between cheek and gum for tobacco reduction.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Tobacco Harm Reduction",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Chlordiazepoxide 25 mg",
                "duration": "7-day reducing detoxification regimen (completed 2025-05-27)",
                "reason": "Successful outpatient alcohol withdrawal management"
            }
        ],
        "caregiver": {
            "name": "Neha Verma",
            "relationship": "Spouse",
            "mobile": "+91 98765 44111",
            "email": "neha.verma@gmail.com",
            "address": "Row House 14, Hermes Heritage, Kalyani Nagar, Pune \u2014 411006",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Relapse Prevention & Craving Emergency Plan Active. High-risk cues: Friday 6 PM client cocktails, airport lounges, arguments. Urge Surfing: 15-minute timer delay, drink chilled sparkling tonic water with lime. Emergency support: Spouse Neha, sponsor Rahul from AA Pune. Helplines: National Substance Helpline (1800-11-0031), Tele-MANAS (14416).",
        "timeline": [
            {
                "date": "2025-05-20",
                "time": "04:00 PM",
                "type": "Consultation",
                "desc": "Detoxification Intake with Dr. Riya Sharma",
                "details": "AUDIT: 26/40. Commenced 7-day Chlordiazepoxide taper + Thiamine 100mg."
            },
            {
                "date": "2025-05-28",
                "time": "04:30 PM",
                "type": "Consultation",
                "desc": "Post-Detox Stabilization with Dr. Riya Sharma",
                "details": "Detox complete. Commenced Naltrexone 50mg OD and MET therapy."
            },
            {
                "date": "2025-06-15",
                "time": "05:00 PM",
                "type": "Consultation",
                "desc": "Abstinence Review with Dr. Riya Sharma",
                "details": "18 days abstinent. LFT enzymes normalized (SGOT 48, SGPT 54). Added MET relapse drills.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Aditya. Congratulations on reaching day 18 of total abstinence. How are you and Neha feeling?\n[00:07] Patient: Thank you Doctor Sharma. The physical withdrawal is completely gone. I am sleeping better and my mind feels sharper. But the evening cravings around 7 PM when I finish client calls are very intense.\n[00:20] Doctor: That is completely expected. That 7 PM window has been conditioned in your brain for over six years. How is the Naltrexone working for you?\n[00:28] Patient: I take the 50mg every morning after breakfast. It definitely blunts the euphoria and obsession, but the habit of having a glass in my hand is hard to break.\n[00:39] Doctor: That is where behavioral substitution and urge surfing come in. In therapy with Dr. Sneha, have you practiced the mocktail substitution strategy during business dinners?\n[00:48] Patient: Yes, I order sparkling water with lime in a rock glass. It takes away the social awkwardness with clients without touching alcohol.\n[00:56] Doctor: That is an excellent strategy. Your liver enzymes are already trending down nicely. Let us keep this exact regimen going."
            },
            {
                "date": "2025-06-23",
                "time": "06:30 PM",
                "type": "Assessment",
                "desc": "AUDIT Assessment Completed",
                "details": "Score: 14/40 (Harmful Use cutoff, dramatic reduction from baseline 26/40 reflecting 28 days abstinence)"
            }
        ],
        "therapyPlan": {
            "modality": "Motivational Enhancement Therapy (MET) & Relapse Prevention",
            "focus": "Decisional balance, craving surfing, high-risk cue mapping, corporate social navigation",
            "freq": "Bi-weekly",
            "status": "Active \u2014 3 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "10 sessions over 4 months",
            "sessionProgress": "3 of 10 planned",
            "sessionPct": 30,
            "focusAreas": "Decisional balance sheet \u00b7 Urge surfing technique \u00b7 High-risk situation audit \u00b7 Refusal skill roleplay \u00b7 Emergency relapse drill",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Assessment Feedback & Decisional Balance",
                    "meta": "28 May 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Review AUDIT score (26/40). Complete Decisional Balance Matrix (pros/cons of drinking vs sobriety).",
                    "discussion": "Explored Aditya's ambivalent feelings regarding business entertainment. Constructed 4-quadrant decisional balance sheet. Highlighting family trust and health as dominant intrinsic motivators.",
                    "homework": [
                        "Keep a pocket copy of the Decisional Balance card in wallet",
                        "Log craving intensity (0-10) with trigger details"
                    ],
                    "progress": "Commitment to 90-day total abstinence contract solidified."
                },
                {
                    "title": "Session 2 \u2014 Urge Surfing & Evening Routine Restructuring",
                    "meta": "11 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Master Urge Surfing protocol for 7 PM conditioned dopamine cravings.",
                    "discussion": "Taught 5-step Urge Surfing: 1) Notice sensation, 2) Focus on breath, 3) Ride the wave for 15 mins without fighting, 4) Replace with tonic water/lime, 5) Engage in 20-min evening play with daughter.",
                    "homework": [
                        "Execute urge surfing protocol during evening craving waves",
                        "Attend 1 online SMART Recovery meeting"
                    ],
                    "progress": "Successfully navigated 4 intense evening cravings without lapse."
                },
                {
                    "title": "Session 3 \u2014 Relapse Prevention & Corporate Dining Strategy",
                    "meta": "24 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Refusal assertion skills and behavioral defense during enterprise client dinners.",
                    "discussion": "Role-played assertive refusal lines with clients ('I am on an athletic detox training regimen'). Established exit strategy for open-bar conferences.",
                    "homework": [
                        "Practice beverage substitution (sparkling water + lime) at upcoming team lunch",
                        "Maintain daily PACS log"
                    ],
                    "progress": "PACS score dropped from 22 to 10. High confidence in maintaining sobriety."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-15",
                "time": "05:00 PM",
                "duration": "30 min",
                "type": "Addiction Medicine Review & Pharmacotherapy Follow-up",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Conditioned evening alcohol cravings at 7 PM",
                    "Mild sleep onset latency",
                    "Workplace social pressure"
                ],
                "notes": "Patient is 18 days completely abstinent following outpatient detox. Tolerating Naltrexone 50mg well with no nausea. LFT enzymes show significant recovery (SGOT down from 112 to 48 U/L, SGPT down from 98 to 54 U/L). PACS craving score 12/30. Neha reports calm home atmosphere.",
                "diagnosis": "Alcohol Use Disorder, Moderate-Severe, in Early Remission (ICD-11: 6C40.1 / ICD-10: F10.20)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Well-groomed corporate attire, clear sclera, no jaundice or tremors",
                        "isGood": true
                    },
                    {
                        "key": "Psychomotor Activity",
                        "val": "Normal psychomotor activity, calm demeanor",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Clear, fluent, articulate, goal-directed",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'determined, feeling physically healthy', Affect congruent",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Focused on recovery milestones, no suicidal ideation or depressive themes",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 5/6 (Aware of addiction disease model)",
                        "isGood": true
                    }
                ],
                "risk": "Low Acute Risk \u00b7 High Relapse Risk in Unmonitored Social Environments. Safety contracts and anti-craving meds active.",
                "treatment": "1. Continue Naltrexone 50mg OD morning. 2. Continue Thiamine 100mg OD. 3. Added Nicotex 2mg gum SOS for smoking reduction. 4. Continue MET therapy with Dr. Sneha Patil. 5. Repeat LFT panel in 6 weeks.",
                "badges": [
                    "Early Remission",
                    "28 Days Sober",
                    "LFT Recovering",
                    "Naltrexone Active"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Aditya. Congratulations on reaching day 18 of total abstinence. How are you and Neha feeling?\n[00:07] Patient: Thank you Doctor Sharma. The physical withdrawal is completely gone. I am sleeping better and my mind feels sharper. But the evening cravings around 7 PM when I finish client calls are very intense.\n[00:20] Doctor: That is completely expected. That 7 PM window has been conditioned in your brain for over six years. How is the Naltrexone working for you?\n[00:28] Patient: I take the 50mg every morning after breakfast. It definitely blunts the euphoria and obsession, but the habit of having a glass in my hand is hard to break.\n[00:39] Doctor: That is where behavioral substitution and urge surfing come in. In therapy with Dr. Sneha, have you practiced the mocktail substitution strategy during business dinners?\n[00:48] Patient: Yes, I order sparkling water with lime in a rock glass. It takes away the social awkwardness with clients without touching alcohol.\n[00:56] Doctor: That is an excellent strategy. Your liver enzymes are already trending down nicely. Let us keep this exact regimen going."
            }
        ]
    },
    {
        "id": "pat-5",
        "uhid": "SH-2025-005",
        "name": "Rohan Kapur",
        "age": 28,
        "gender": "Male",
        "dob": "1997-01-16",
        "bloodGroup": "O+",
        "email": "rohan.kapur.dev@gmail.com",
        "mobile": "+91 98765 55667",
        "address": "Tower 4, Flat 1201, DLF Phase 5, Golf Course Road, Gurugram \u2014 122002",
        "occupation": "Senior Full-Stack Developer",
        "maritalStatus": "Single",
        "education": "B.Tech in Computer Engineering (DTU)",
        "livingArrangement": "Lives in shared apartment with tech colleagues",
        "substanceHistory": {
            "alcohol": "Occasional beer on weekends (1-2 pints)",
            "tobacco": "Never smoked",
            "caffeine": "3-4 cups black coffee/day (self-medicating for focus)",
            "other": "None"
        },
        "vitals": {
            "bp": "124/80 mmHg",
            "pulse": "80 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "71 kg",
            "height": "176 cm",
            "bmi": "22.9 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-18",
                "bp": "122/78 mmHg",
                "pulse": "76 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "72.0 kg",
                "bmi": "23.2 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-10",
                "bp": "124/80 mmHg",
                "pulse": "82 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "71.5 kg",
                "bmi": "23.0 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-24",
                "bp": "124/80 mmHg",
                "pulse": "80 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "71.0 kg",
                "bmi": "22.9 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Delayed Sleep Phase Syndrome (managed with Melatonin 3mg). Baseline ECG normal (QTc 402 ms).",
        "psychiatricHistory": "Childhood inattention and restlessness (WURS: 58/100). First formal ADHD evaluation in adulthood following workplace PIP.",
        "familyHistory": "Younger brother diagnosed with ADHD at age 10; Father exhibits marked executive disorganization.",
        "personalHistory": "High IQ, passionate coder, hyperfocuses on gaming/coding projects while failing routine administrative tasks.",
        "currentMeds": [
            {
                "id": "m-501",
                "name": "Methylphenidate ER",
                "brand": "Inspiral SR 36",
                "dose": "36 mg",
                "route": "Oral",
                "freq": "Once daily, morning (after breakfast)",
                "timing": "Morning (1-0-0)",
                "duration": "6 weeks",
                "startDate": "2025-05-25",
                "instructions": "Take immediately after morning breakfast. Schedule X regulated formulation. Do not take after 1:00 PM to avoid insomnia.",
                "prescriber": "Dr. Vivek Anand",
                "indication": "Adult ADHD Combined Type",
                "status": "Active"
            },
            {
                "id": "m-502",
                "name": "Melatonin PR",
                "brand": "Meloset 3",
                "dose": "3 mg",
                "route": "Oral",
                "freq": "Bedtime (1 hour before sleep)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "startDate": "2025-05-18",
                "instructions": "Take at 10:30 PM for circadian phase shifting.",
                "prescriber": "Dr. Vivek Anand",
                "indication": "Delayed Sleep Phase",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Methylphenidate SR 18 mg",
                "duration": "1 week (titrated to 36mg on 2025-05-25)",
                "reason": "Standard titration to achieve 8-hour executive focus window"
            },
            {
                "name": "Atomoxetine 40 mg",
                "duration": "2 months (discontinued 2024)",
                "reason": "Severe gastrointestinal nausea and sub-optimal focus response"
            }
        ],
        "caregiver": {
            "name": "Siddharth Kapur",
            "relationship": "Brother",
            "mobile": "+91 98765 55111",
            "email": "siddharth.kapur@gmail.com",
            "address": "Tower 4, Flat 1201, DLF Phase 5, Gurugram \u2014 122002",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Low crisis risk. Overwhelm protocol: Pomodoro 25/5 reset, physical walk around cyberhub, brain dump notepad. Support: Brother Siddharth. Regulated prescription stored safely.",
        "timeline": [
            {
                "date": "2025-05-18",
                "time": "02:00 PM",
                "type": "Consultation",
                "desc": "Adult ADHD Diagnostic Evaluation with Dr. Vivek Anand",
                "details": "ASRS v1.1 Part A: 22/24. WURS: 58/100. Baseline ECG normal. Initiated Methylphenidate SR 18mg."
            },
            {
                "date": "2025-05-25",
                "time": "02:30 PM",
                "type": "Consultation",
                "desc": "Titration Review with Dr. Vivek Anand",
                "details": "Titrated Methylphenidate to 36mg OD. Pulse and BP stable."
            },
            {
                "date": "2025-06-10",
                "time": "03:00 PM",
                "type": "Consultation",
                "desc": "Executive Performance Review with Dr. Vivek Anand",
                "details": "Dramatic improvement in sustained attention during sprint reviews. Commenced ADHD coaching.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Rohan. How have the past two weeks been on Methylphenidate ER 36mg?\n[00:06] Patient: Doctor, it has honestly been life-changing. For the first time in my career, I can sit down and read a 40-page software documentation document without checking my phone every three minutes.\n[00:18] Doctor: That is fantastic to hear. How is your appetite and sleep?\n[00:23] Patient: My appetite dips slightly around 1 PM, but I make sure to eat a heavy breakfast before taking the pill. With Melatonin at night, I am falling asleep by 11:30 PM.\n[00:34] Doctor: Your vitals look great\u2014BP is 124/80 and pulse is 82 bpm. How are you progressing in ADHD coaching with Dr. Sneha?\n[00:43] Patient: We set up a visual Kanban board and Pomodoro timers. I haven't missed a single sprint deadline this past week.\n[00:52] Doctor: Excellent. We will maintain the 36mg dosage and continue the behavioral executive scaffolding."
            },
            {
                "date": "2025-06-24",
                "time": "10:00 AM",
                "type": "Assessment",
                "desc": "ASRS v1.1 Follow-up Scale Completed",
                "details": "Score: 11/24 (Marked improvement from baseline 22/24)"
            }
        ],
        "therapyPlan": {
            "modality": "ADHD Executive Function Coaching & Cognitive Behavioral Scaffolding",
            "focus": "Time-blindness, externalized task organization, impulse regulation, Pomodoro pacing",
            "freq": "Bi-weekly",
            "status": "Active \u2014 2 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "8 sessions over 4 months",
            "sessionProgress": "2 of 8 planned",
            "sessionPct": 25,
            "focusAreas": "Visual Kanban board \u00b7 Time-blocking calendar \u00b7 25/5 Pomodoro intervals \u00b7 Working memory externalization",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Executive Function & Study Space Audit",
                    "meta": "27 May 2025 \u00b7 45 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Conduct workplace friction audit. Eliminate visual and digital distractions.",
                    "discussion": "Identified major focus leaks: 40 open browser tabs, constant Slack pings, disorganized desktop. Structured 'Focus Zones' at home workspace.",
                    "homework": [
                        "Install website blocker for news/games during 9 AM - 5 PM work block",
                        "Use physical white board for top 3 daily priorities"
                    ],
                    "progress": "Patient embraced externalized visual cues, reducing task paralysis."
                },
                {
                    "title": "Session 2 \u2014 Time Block Scheduling & Pomodoro Pacing",
                    "meta": "10 Jun 2025 \u00b7 45 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Implement 25-minute Pomodoro sprints with mandatory 5-minute movement breaks.",
                    "discussion": "Reviewed Kanban board usage. Rohan completed 18 Pomodoro cycles in 4 days. Tackled 'Hyperfocus Burnout' by enforcing strict 5-minute stretch breaks.",
                    "homework": [
                        "Execute daily calendar time-blocking in 2-hour thematic chunks",
                        "Maintain bedtime digital sunset at 10 PM"
                    ],
                    "progress": "Sprint completion rate reached 100% on Jira. High motivation."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-10",
                "time": "03:00 PM",
                "duration": "30 min",
                "type": "Psychostimulant Titration & Clinical Follow-up",
                "doctor": "Dr. Vivek Anand",
                "location": "In-person \u00b7 Room 102",
                "complaints": [
                    "Past history of chronic executive disorganization and deadline failures",
                    "Mild midday appetite suppression"
                ],
                "notes": "28yo software engineer on Methylphenidate ER 36mg. Excellent therapeutic response with 8-hour sustained executive focus. ASRS v1.1 Part A score decreased from 22 to 11. Blood pressure and heart rate within optimal normal limits (BP 124/80, HR 82 bpm).",
                "diagnosis": "Adult Attention-Deficit/Hyperactivity Disorder, Combined Presentation (ICD-11: 6A05.2 / ICD-10: F90.0)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Neat tech-casual attire, animated, good eye contact",
                        "isGood": true
                    },
                    {
                        "key": "Psychomotor Activity",
                        "val": "Mild foot tapping, significantly less restless than baseline",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Rapid, articulate, coherent, goal-directed",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'productive and optimistic', Affect bright and congruent",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Focused on engineering milestones, zero depressive or suicidal ideation",
                        "isGood": true
                    },
                    {
                        "key": "Cognition",
                        "val": "Digit Span Forward 7, Backward 6 (improved on stimulant), Insight Grade 6/6",
                        "isGood": true
                    }
                ],
                "risk": "Minimal Risk. Controlled substance compliance verified via Schedule X prescription registry.",
                "treatment": "1. Refilled Methylphenidate ER 36mg tab OD morning \u00d7 30 days. 2. Melatonin PR 3mg bedtime. 3. Continue bi-weekly ADHD coaching with Dr. Sneha Patil. 4. Blood pressure check every month.",
                "badges": [
                    "Adult ADHD",
                    "Stimulant Titrated",
                    "Vitals Normal",
                    "High Focus Gain"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Rohan. How have the past two weeks been on Methylphenidate ER 36mg?\n[00:06] Patient: Doctor, it has honestly been life-changing. For the first time in my career, I can sit down and read a 40-page software documentation document without checking my phone every three minutes.\n[00:18] Doctor: That is fantastic to hear. How is your appetite and sleep?\n[00:23] Patient: My appetite dips slightly around 1 PM, but I make sure to eat a heavy breakfast before taking the pill. With Melatonin at night, I am falling asleep by 11:30 PM.\n[00:34] Doctor: Your vitals look great\u2014BP is 124/80 and pulse is 82 bpm. How are you progressing in ADHD coaching with Dr. Sneha?\n[00:43] Patient: We set up a visual Kanban board and Pomodoro timers. I haven't missed a single sprint deadline this past week.\n[00:52] Doctor: Excellent. We will maintain the 36mg dosage and continue the behavioral executive scaffolding."
            }
        ]
    },
    {
        "id": "pat-6",
        "uhid": "SH-2025-006",
        "name": "Neha Gupta",
        "age": 45,
        "gender": "Female",
        "dob": "1980-08-12",
        "bloodGroup": "A+",
        "email": "neha.gupta.edu@gmail.com",
        "mobile": "+91 98765 77889",
        "address": "AE-340, Salt Lake City, Sector 1, Kolkata \u2014 700064",
        "occupation": "Vice Principal (Senior Secondary School)",
        "maritalStatus": "Married",
        "education": "M.A. English Literature, B.Ed",
        "livingArrangement": "Lives with spouse Rajesh Gupta and two teenage children",
        "substanceHistory": {
            "alcohol": "Never",
            "tobacco": "Never",
            "caffeine": "2 cups Darjeeling tea/day",
            "other": "None"
        },
        "vitals": {
            "bp": "128/80 mmHg",
            "pulse": "74 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "66.8 kg",
            "height": "158 cm",
            "bmi": "26.7 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-12",
                "bp": "136/86 mmHg",
                "pulse": "78 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "98%",
                "weight": "68.0 kg",
                "bmi": "27.2 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            },
            {
                "date": "2025-06-05",
                "bp": "130/82 mmHg",
                "pulse": "76 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "67.2 kg",
                "bmi": "26.9 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            },
            {
                "date": "2025-06-24",
                "bp": "128/80 mmHg",
                "pulse": "74 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "66.8 kg",
                "bmi": "26.7 kg/m\u00b2",
                "recordedBy": "Nurse Priya"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Type 2 Diabetes Mellitus (HbA1c: 7.8%), Diabetic Peripheral Neuropathy of lower extremities (burning dysesthesias).",
        "psychiatricHistory": "Recurrent Major Depressive Disorder (Episode 1 in 2017, Episode 2 in 2021). Responsive to SNRI dual-action agents.",
        "familyHistory": "Mother had chronic unipolar depression; Sister has Hashimoto's Thyroiditis.",
        "personalHistory": "Dedicated educator, high empathetic investment in students, chronic pain exacerbating low mood.",
        "currentMeds": [
            {
                "id": "m-601",
                "name": "Venlafaxine ER",
                "brand": "Venlor XR 75",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Once daily, morning with breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "startDate": "2025-05-12",
                "instructions": "Take with breakfast. Dual serotonin-norepinephrine reuptake inhibitor for depression and neuropathic pain.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Recurrent MDD & Neuropathic Pain",
                "status": "Active"
            },
            {
                "id": "m-602",
                "name": "Metformin",
                "brand": "Glycomet 500",
                "dose": "500 mg",
                "route": "Oral",
                "freq": "Twice daily with meals (1-0-1)",
                "timing": "Morning & Night (1-0-1)",
                "duration": "Continuous",
                "startDate": "2022-04-10",
                "instructions": "Continue for glycemic control.",
                "prescriber": "Dr. S. Chatterjee (Diabetology)",
                "indication": "Type 2 Diabetes Mellitus",
                "status": "Active"
            },
            {
                "id": "m-603",
                "name": "Pregabalin",
                "brand": "Maxgalin 75",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "startDate": "2025-05-12",
                "instructions": "Take at bedtime for neuropathic leg pain.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Diabetic Peripheral Neuropathy",
                "status": "Active"
            },
            {
                "id": "m-604",
                "name": "Methylcobalamin + Alpha Lipoic Acid",
                "brand": "Nurokind-Plus",
                "dose": "1 cap",
                "route": "Oral",
                "freq": "Once daily after lunch",
                "timing": "Afternoon (0-1-0)",
                "duration": "12 weeks",
                "startDate": "2025-05-12",
                "instructions": "Nerve health maintenance.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Neurotrophic Support",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Escitalopram 10 mg",
                "duration": "6 months (2021)",
                "reason": "Insufficient relief for neuropathic pain and somnolence"
            }
        ],
        "caregiver": {
            "name": "Rajesh Gupta",
            "relationship": "Spouse",
            "mobile": "+91 98765 77111",
            "email": "rajesh.gupta.kolkata@gmail.com",
            "address": "AE-340, Salt Lake City, Sector 1, Kolkata \u2014 700064",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Low acute risk. Coping: Mindful gardening on terrace, listening to Rabindra Sangeet, evening tea with husband. Emergency: Rajesh Gupta, Tele-MANAS (14416).",
        "timeline": [
            {
                "date": "2025-05-12",
                "time": "10:00 AM",
                "type": "Consultation",
                "desc": "Depression Intake with Dr. Riya Sharma",
                "details": "PHQ-9: 19/27. Commenced Venlafaxine XR 75mg + Pregabalin 75mg for dual depression/neuropathy relief."
            },
            {
                "date": "2025-06-05",
                "time": "10:30 AM",
                "type": "Consultation",
                "desc": "Follow-up Review with Dr. Riya Sharma",
                "details": "Neuropathic burning reduced by 50%. PHQ-9 improved to 14/27."
            },
            {
                "date": "2025-06-24",
                "time": "10:45 AM",
                "type": "Assessment",
                "desc": "PHQ-9 Assessment Completed",
                "details": "Score: 12/27 (Moderate Depression, steady downward trend from baseline 19/27)"
            }
        ],
        "therapyPlan": {
            "modality": "Supportive Psychotherapy & Pain Acceptance Therapy",
            "focus": "Chronic illness burden, pacing, grief over somatic limitations, self-compassion",
            "freq": "Bi-weekly",
            "status": "Active \u2014 2 sessions completed",
            "referred": "Dr. Shalini Mukhopadhyay (Clinical Psychologist)",
            "goals": "8 sessions over 4 months",
            "sessionProgress": "2 of 8 planned",
            "sessionPct": 25,
            "focusAreas": "Energy budgeting \u00b7 Activity pacing \u00b7 Pain acceptance \u00b7 Mindful self-compassion",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Introduction & Energy Budgeting",
                    "meta": "19 May 2025 \u00b7 45 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Introduce 'Spoon Theory' energy budgeting model for chronic pain and depression.",
                    "discussion": "Mapped how pushing through school board inspections caused severe physical crashes. Established realistic daily pacing.",
                    "homework": [
                        "Complete Daily Energy Budget log",
                        "Delegate evening dinner prep to family"
                    ],
                    "progress": "Patient felt validated regarding chronic fatigue."
                },
                {
                    "title": "Session 2 \u2014 Pleasant Activities & Mindful Gardening",
                    "meta": "09 Jun 2025 \u00b7 45 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Re-engage in low-impact pleasurable activities.",
                    "discussion": "Reviewed energy logs. Neha spent 20 mins watering rooftop plants, reported positive mood boost.",
                    "homework": [
                        "20 mins morning mindful balcony time",
                        "Practice diaphragmatic breathing during pain spikes"
                    ],
                    "progress": "Mood scores improving steadily. High compliance."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-05",
                "time": "10:30 AM",
                "duration": "30 min",
                "type": "Psychiatric Evaluation & Comorbidity Review",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Lethargy",
                    "Burning pain in bilateral feet at night",
                    "Guilt over taking sick leave from school"
                ],
                "notes": "45yo educator with Recurrent MDD and Type 2 Diabetes. Venlafaxine XR 75mg + Pregabalin 75mg providing significant dual relief. Burning dysesthesias reduced by 50%. Sleep uninterrupted. PHQ-9 dropped from 19 to 14.",
                "diagnosis": "Recurrent Major Depressive Disorder, Current Episode Moderate with Somatic Features (ICD-11: 6A71.0 / ICD-10: F33.1)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Neatly dressed in saree, pleasant, cooperative",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Soft-spoken, normal rate and rhythm, coherent",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'getting lighter, less hopeless', Affect restricted but reactive",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Worry about school duties, denies suicidal ideation (Q9 = 1)",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 6/6 (True emotional insight)",
                        "isGood": true
                    }
                ],
                "risk": "Low Risk. Strong protective family alliances and high treatment engagement.",
                "treatment": "1. Continue Venlafaxine XR 75mg OD morning. 2. Continue Pregabalin 75mg bedtime. 3. Continue Metformin 500mg BD. 4. Continue supportive psychotherapy with Dr. Shalini. 5. HbA1c repeat in 8 weeks.",
                "badges": [
                    "Recurrent MDD",
                    "T2DM Comorbidity",
                    "SNRI Active",
                    "Pain Reduced"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good morning Neha. How have you been feeling on the Venlafaxine and Pregabalin?\n[00:06] Patient: Good morning Dr. Sharma. The burning sensation in my feet is much less severe at night, so I am able to sleep 6 to 7 hours now.\n[00:15] Doctor: That is a wonderful improvement. Sleep restoration makes a massive difference in depression recovery. How is your energy during school hours?\n[00:23] Patient: I still feel tired by 3 PM, but the overwhelming heavy feeling in my chest has lifted. In therapy, Dr. Shalini taught me energy pacing.\n[00:34] Doctor: Excellent. Your PHQ-9 score came down from 19 to 14 today. We will keep this exact medication combination and continue our supportive therapy sessions."
            }
        ]
    },
    {
        "id": "pat-7",
        "uhid": "SH-2025-007",
        "name": "Kishore Kumar",
        "age": 68,
        "gender": "Male",
        "dob": "1957-04-05",
        "bloodGroup": "B+",
        "email": "dr.anirudh.kumar@apollo.org",
        "mobile": "+91 98765 88990",
        "address": "18/2, Eldams Road, Alwarpet, Chennai \u2014 600018",
        "occupation": "Retired Chief Accounts Officer (Tamil Nadu Electricity Board)",
        "maritalStatus": "Widowed",
        "education": "M.Com (Madras University)",
        "livingArrangement": "Lives with son Dr. Anirudh Kumar (Surgical Oncologist) and family",
        "substanceHistory": {
            "alcohol": "Never",
            "tobacco": "Never",
            "caffeine": "2 cups South Indian filter coffee/day",
            "other": "None"
        },
        "vitals": {
            "bp": "130/80 mmHg",
            "pulse": "68 bpm",
            "temp": "98.4 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "63 kg",
            "height": "167 cm",
            "bmi": "22.6 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-20",
                "bp": "144/88 mmHg",
                "pulse": "72 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "98%",
                "weight": "64.0 kg",
                "bmi": "22.9 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-14",
                "bp": "134/82 mmHg",
                "pulse": "70 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "63.5 kg",
                "bmi": "22.8 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-24",
                "bp": "130/80 mmHg",
                "pulse": "68 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "63.0 kg",
                "bmi": "22.6 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Essential Hypertension, Prior Lacunar Infarct (Right internal capsule, 2022). Brain MRI: Mild hippocampal atrophy (MTA Grade 1) + Fazekas 1 leukoaraiosis.",
        "psychiatricHistory": "Mild late-life cognitive anxiety. No prior psychiatric hospitalizations or mood episodes.",
        "familyHistory": "Mother developed late-onset Alzheimer's dementia at age 79.",
        "personalHistory": "Meticulous accountant for 38 years, widower for 4 years, highly respected family elder.",
        "currentMeds": [
            {
                "id": "m-701",
                "name": "Donepezil Hydrochloride",
                "brand": "Donecept 5",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime after dinner (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "12 weeks",
                "startDate": "2025-05-20",
                "instructions": "Take at bedtime with water. Reversible acetylcholinesterase inhibitor for cognitive stabilization.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Mild Cognitive Impairment",
                "status": "Active"
            },
            {
                "id": "m-702",
                "name": "Escitalopram",
                "brand": "Nexito 5",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "12 weeks",
                "startDate": "2025-05-20",
                "instructions": "Low dose for cognitive anxiety and irritability.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Late-Life Cognitive Anxiety",
                "status": "Active"
            },
            {
                "id": "m-703",
                "name": "Telmisartan",
                "brand": "Telma 40",
                "dose": "40 mg",
                "route": "Oral",
                "freq": "Once daily, morning (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "startDate": "2022-01-15",
                "instructions": "Continue for vascular blood pressure control.",
                "prescriber": "Dr. V. Ramani (Cardiology)",
                "indication": "Essential Hypertension",
                "status": "Active"
            },
            {
                "id": "m-704",
                "name": "Aspirin",
                "brand": "Ecosprin 75",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Once daily, after lunch (0-1-0)",
                "timing": "Afternoon (0-1-0)",
                "duration": "Continuous",
                "startDate": "2022-05-10",
                "instructions": "Secondary vascular stroke prophylaxis.",
                "prescriber": "Dr. V. Ramani (Cardiology)",
                "indication": "Vascular Prophylaxis",
                "status": "Active"
            },
            {
                "id": "m-705",
                "name": "Methylcobalamin (Vit B12)",
                "brand": "Neurobion Forte",
                "dose": "1500 mcg",
                "route": "Oral",
                "freq": "Once daily, morning",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "startDate": "2025-05-20",
                "instructions": "Neurotrophic support.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Cognitive Maintenance",
                "status": "Active"
            }
        ],
        "pastMeds": [],
        "caregiver": {
            "name": "Dr. Anirudh Kumar",
            "relationship": "Son (Physician)",
            "mobile": "+91 98765 88111",
            "email": "dr.anirudh.kumar@apollo.org",
            "address": "18/2, Eldams Road, Alwarpet, Chennai \u2014 600018",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true,
                "careNotes": true
            }
        },
        "crisisPlan": "Low crisis risk. Memory scaffolding: Large font whiteboard in hallway with daily dates, pill organizer loaded weekly by daughter-in-law, emergency ID card in wallet. Support: Son Dr. Anirudh Kumar.",
        "timeline": [
            {
                "date": "2025-05-20",
                "time": "11:00 AM",
                "type": "Consultation",
                "desc": "Neurocognitive Intake with Dr. Riya Sharma",
                "details": "MoCA: 22/30 (Mild Cognitive Impairment, deficits in delayed recall 1/5). Initiated Donepezil 5mg + Cognitive Rehab."
            },
            {
                "date": "2025-06-14",
                "time": "11:30 AM",
                "type": "Consultation",
                "desc": "Follow-up Neurocognitive Review with Dr. Riya Sharma",
                "details": "Tolerating Donepezil well, zero GI side effects. Repetitive questioning decreased.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Vanakkam Mr. Kishore Kumar. It is great to see you and Dr. Anirudh today. How has your routine been in Chennai?\n[00:07] Patient: Vanakkam Doctor. I am doing well. I go for my morning walk in Nageswara Rao Park every day. My son says I sometimes forget what happened yesterday, but I remember everything from my service in the Electricity Board.\n[00:21] Doctor: That is very common, Mr. Kumar. Long-term memories are very well preserved. Anirudh, how have the Donepezil 5mg and the memory strategies been working at home?\n[00:30] Caregiver: Doctor, the Donepezil caused no nausea at all. The whiteboard calendar in the dining room has been fantastic. He checks it every morning and writes down his tasks.\n[00:41] Doctor: That is wonderful. Environmental scaffolding combined with Donepezil helps preserve synaptic acetylcholine. MoCA score is stable at 22/30 today."
            },
            {
                "date": "2025-06-24",
                "time": "11:00 AM",
                "type": "Assessment",
                "desc": "Sleep & Routine Diary Logged",
                "details": "Sleep efficiency 82%, consistent 10 PM to 6 AM sleep window"
            }
        ],
        "therapyPlan": {
            "modality": "Cognitive Rehabilitation & Environmental Scaffolding",
            "focus": "Spaced retrieval, external memory aids, visual organizers, caregiver education",
            "freq": "Bi-weekly",
            "status": "Active \u2014 2 sessions completed",
            "referred": "Dr. Pradeep Joshi (Neuropsychologist)",
            "goals": "6 sessions over 3 months",
            "sessionProgress": "2 of 6 planned",
            "sessionPct": 33,
            "focusAreas": "Whiteboard organization \u00b7 Spaced retrieval practice \u00b7 Medication pillbox mastery \u00b7 Sudoku/Tamil word puzzles",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Environmental Structuring & Whiteboard Setup",
                    "meta": "28 May 2025 \u00b7 45 min \u00b7 Dr. Pradeep Joshi",
                    "status": "Completed",
                    "goals": "Design external memory ecosystem in home environment.",
                    "discussion": "Set up centralized whiteboard in dining hall with date, day's appointments, and emergency contacts. Taught family consistent placement of keys, spectacles, and wallet.",
                    "homework": [
                        "Check whiteboard 3 times daily (morning, afternoon, night)",
                        "Place keys on designated hallway hook"
                    ],
                    "progress": "Patient successfully adopted the whiteboard routine."
                },
                {
                    "title": "Session 2 \u2014 Memory Strategies & Association Exercises",
                    "meta": "18 Jun 2025 \u00b7 45 min \u00b7 Dr. Pradeep Joshi",
                    "status": "Completed",
                    "goals": "Teach spaced retrieval and verbal chaining techniques for daily names and items.",
                    "discussion": "Practiced spaced retrieval for new neighbors' names and daily medication schedule. Conducted 15-minute structured Tamil crossword puzzle.",
                    "homework": [
                        "Complete 1 daily newspaper crossword puzzle",
                        "Review daily agenda with son at dinner"
                    ],
                    "progress": "High engagement, patient felt empowered."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-14",
                "time": "11:30 AM",
                "duration": "30 min",
                "type": "Geriatric Neuropsychiatric Evaluation",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Short-term memory lapses for recent conversations",
                    "Misplacing spectacles",
                    "Repetitive questioning of daughter-in-law"
                ],
                "notes": "68yo retired chief accounts officer presenting with amnestic multi-domain MCI. MoCA 22/30. MRI brain shows mild hippocampal atrophy and lacunar white matter changes. Donepezil 5mg well-tolerated with zero cholinergic adverse effects. High cognitive reserve and excellent family care.",
                "diagnosis": "Mild Cognitive Impairment, Amnestic Multi-Domain with Vascular Risk (ICD-11: 6D71 / ICD-10: F06.7)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Elderly gentleman in clean white veshti and shirt, polite, dignified",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Fluent, coherent, dignified Tamil-English blend, no dysphasia",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'cheerful and peaceful', Affect warm, congruent",
                        "isGood": true
                    },
                    {
                        "key": "Orientation",
                        "val": "Oriented to person, city, year; missed exact day (thought Wednesday instead of Tuesday)",
                        "isGood": true
                    },
                    {
                        "key": "Memory",
                        "val": "Immediate recall 3/3, Delayed recall 1/3 (improved to 3/3 with semantic cueing)",
                        "isGood": false
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 4/6 (Aware of memory lapses, attributes to age)",
                        "isGood": true
                    }
                ],
                "risk": "Low Risk. Fully supervised living arrangement with physician son. Basic ADLs independent.",
                "treatment": "1. Continue Donepezil 5mg OD bedtime. 2. Continue Escitalopram 5mg bedtime. 3. Continue Telmisartan 40mg + Ecosprin 75mg. 4. Continue cognitive rehabilitation with Dr. Joshi. 5. Annual MoCA reassessment.",
                "badges": [
                    "MCI Multi-Domain",
                    "MoCA: 22/30",
                    "Donepezil Active",
                    "Vascular Prophylaxis"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Vanakkam Mr. Kishore Kumar. It is great to see you and Dr. Anirudh today. How has your routine been in Chennai?\n[00:07] Patient: Vanakkam Doctor. I am doing well. I go for my morning walk in Nageswara Rao Park every day. My son says I sometimes forget what happened yesterday, but I remember everything from my service in the Electricity Board.\n[00:21] Doctor: That is very common, Mr. Kumar. Long-term memories are very well preserved. Anirudh, how have the Donepezil 5mg and the memory strategies been working at home?\n[00:30] Caregiver: Doctor, the Donepezil caused no nausea at all. The whiteboard calendar in the dining room has been fantastic. He checks it every morning and writes down his tasks.\n[00:41] Doctor: That is wonderful. Environmental scaffolding combined with Donepezil helps preserve synaptic acetylcholine. MoCA score is stable at 22/30 today."
            }
        ]
    },
    {
        "id": "pat-8",
        "uhid": "SH-2025-008",
        "name": "Sanjana Iyer",
        "age": 24,
        "gender": "Female",
        "dob": "2001-02-18",
        "bloodGroup": "O+",
        "email": "sanjana.iyer.design@gmail.com",
        "mobile": "+91 98765 11223",
        "address": "14/A, 12th Main, 2nd Stage, Indiranagar, Bengaluru \u2014 560038",
        "occupation": "UI/UX Product Designer",
        "maritalStatus": "Single",
        "education": "B.Des (National Institute of Design)",
        "livingArrangement": "Lives with parents in Indiranagar residence",
        "substanceHistory": {
            "alcohol": "Never",
            "tobacco": "Never",
            "caffeine": "1 cup masala chai morning",
            "other": "None"
        },
        "vitals": {
            "bp": "112/72 mmHg",
            "pulse": "70 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "51 kg",
            "height": "164 cm",
            "bmi": "19.0 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-10",
                "bp": "114/74 mmHg",
                "pulse": "76 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "50.0 kg",
                "bmi": "18.6 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-05",
                "bp": "116/76 mmHg",
                "pulse": "74 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "50.5 kg",
                "bmi": "18.8 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            },
            {
                "date": "2025-06-24",
                "bp": "112/72 mmHg",
                "pulse": "70 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "51.0 kg",
                "bmi": "19.0 kg/m\u00b2",
                "recordedBy": "Nurse Meena"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Contact Dermatitis of bilateral hands secondary to frequent handwashing (30-40x daily).",
        "psychiatricHistory": "Obsessive-Compulsive Disorder (Contamination & Checking). Onset age 17 during school exams, exacerbated by remote work.",
        "familyHistory": "Maternal aunt diagnosed with OCD (Checking rituals); Mother has perfectionistic traits.",
        "personalHistory": "High creative achiever, perfectionistic aesthetics, recognizes irrationality of rituals (ego-dystonic).",
        "currentMeds": [
            {
                "id": "m-801",
                "name": "Fluoxetine",
                "brand": "Flunil 60",
                "dose": "60 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "startDate": "2025-05-15",
                "instructions": "Take after breakfast. Anti-obsessional titration target dose. Monitor QTc interval annually.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Obsessive-Compulsive Disorder",
                "status": "Active"
            },
            {
                "id": "m-802",
                "name": "Liquid Paraffin Emollient Cream",
                "brand": "Venusia Max",
                "dose": "Apply liberally",
                "route": "Topical",
                "freq": "After every hand wash & bedtime",
                "timing": "Topical",
                "duration": "Continuous",
                "startDate": "2025-05-10",
                "instructions": "Skin barrier restoration for hand dermatitis.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Hand Dermatitis / Skin Barrier",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Fluoxetine 20 mg",
                "duration": "4 weeks (titrated to 40mg then 60mg)",
                "reason": "Standard OCD high-dose anti-obsessional titration"
            }
        ],
        "caregiver": {
            "name": "Lalitha Iyer",
            "relationship": "Mother",
            "mobile": "+91 98765 11999",
            "email": "lalitha.iyer@gmail.com",
            "address": "14/A, 12th Main, 2nd Stage, Indiranagar, Bengaluru \u2014 560038",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Low crisis risk. OCD Surge Plan: 10-minute response delay timer, tactile grounding with stress ball, call Dr. Sneha Patil's clinic assistant. Family accommodation protocol: Parents do not sanitize groceries or answer reassurance questions.",
        "timeline": [
            {
                "date": "2025-04-20",
                "time": "03:00 PM",
                "type": "Consultation",
                "desc": "OCD Intake with Dr. Riya Sharma",
                "details": "Y-BOCS: 28/40 (Severe OCD, Contamination obsessions + 4-hour washing rituals). Initiated Fluoxetine 20mg."
            },
            {
                "date": "2025-05-15",
                "time": "03:30 PM",
                "type": "Consultation",
                "desc": "Titration Review with Dr. Riya Sharma",
                "details": "Titrated Fluoxetine to 60mg OD. Commenced ERP therapy with Dr. Sneha Patil."
            },
            {
                "date": "2025-06-18",
                "time": "04:00 PM",
                "type": "Consultation",
                "desc": "ERP Progress Review with Dr. Riya Sharma",
                "details": "Y-BOCS dropped to 19/40 (Moderate, 32% reduction). Handwashing reduced to 12x/day.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Sanjana. How have you been feeling since we increased Fluoxetine to 60mg?\n[00:06] Patient: Hello Dr. Sharma. The intrusive thoughts about germs are still there, but they don't feel as deafening. I can pause before rushing to the sink.\n[00:16] Doctor: That is a massive breakthrough. How are your bilateral hands healing?\n[00:21] Patient: The erythema and bleeding cracks have almost completely healed because I am using the emollient and only washing for 30 seconds instead of 4 minutes.\n[00:31] Doctor: That is wonderful news. How was your in-vivo exposure session with Dr. Sneha last week?\n[00:37] Patient: We practiced touching the door handles at the clinic and waiting 45 minutes before washing. My SUDs anxiety peaked at 8/10, but it dropped to 3/10 on its own without washing!\n[00:48] Doctor: That is the gold-standard ERP extinction curve. Your Y-BOCS score dropped from 28 to 19 today. We will keep Fluoxetine at 60mg and push further on the hierarchy."
            },
            {
                "date": "2025-06-24",
                "time": "09:30 AM",
                "type": "Assessment",
                "desc": "Y-BOCS Assessment Completed",
                "details": "Score: 19/40 (Moderate OCD, down from baseline 28/40)"
            }
        ],
        "therapyPlan": {
            "modality": "Exposure and Response Prevention (ERP)",
            "focus": "Contamination hierarchy, response prevention, elimination of parental accommodation",
            "freq": "Weekly",
            "status": "Active \u2014 3 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "10 sessions over 3 months",
            "sessionProgress": "3 of 10 planned",
            "sessionPct": 30,
            "focusAreas": "SUDs anxiety hierarchy \u00b7 In-vivo door handle exposures \u00b7 45-min washing delay \u00b7 Family accommodation cessation",
            "sessions": [
                {
                    "title": "Session 1 \u2014 OCD Formulation & SUDs Hierarchy",
                    "meta": "20 May 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Construct 10-step Subjective Units of Distress (SUDs) contamination hierarchy.",
                    "discussion": "Explained habituation curve. Identified hierarchy: Step 1 (touching home doorknob, SUDs 40), Step 5 (touching elevator buttons, SUDs 70), Step 10 (public restroom handle, SUDs 100).",
                    "homework": [
                        "Touch bedroom door handle 3x daily without washing for 15 minutes"
                    ],
                    "progress": "Patient demonstrated excellent insight into the negative reinforcement cycle."
                },
                {
                    "title": "Session 2 \u2014 In-Vivo Exposure: Home Door Handles",
                    "meta": "03 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Execute in-session in-vivo exposure to main entrance door handle.",
                    "discussion": "Sanjana touched the clinic entrance handle, held palms together for 30 minutes. SUDs peaked at 80/100 at minute 8, decreased to 30/100 by minute 25 without compulsive washing.",
                    "homework": [
                        "Practice 30-min response prevention after touching kitchen counters",
                        "Parents cease answering 'Is this clean?' questions"
                    ],
                    "progress": "Habituation confirmed. Daily handwashing reduced from 35x to 20x."
                },
                {
                    "title": "Session 3 \u2014 In-Vivo Exposure: Public Desks & Books",
                    "meta": "17 Jun 2025 \u00b7 50 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Tackle Step 4 of hierarchy (handling public library books and laptop trackpad).",
                    "discussion": "Conducted 45-minute response prevention. Patient successfully refrained from using alcohol wipes on her work laptop.",
                    "homework": [
                        "Work from a local cafe for 1 hour without sanitizing the table",
                        "Log SUDs recovery curve"
                    ],
                    "progress": "Y-BOCS dropped to 19. Significant functional liberation."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-18",
                "time": "04:00 PM",
                "duration": "30 min",
                "type": "OCD Pharmacotherapy & ERP Review",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Intrusive contamination fears",
                    "Residual urge to wash hands after touching package deliveries"
                ],
                "notes": "24yo UI/UX designer with Contamination OCD. On Fluoxetine 60mg OD + weekly ERP. Handwashing reduced from 35x to 12x/day. Hand skin fissures fully epithelialized. Y-BOCS score 19/40 (32% reduction). Excellent insight.",
                "diagnosis": "Obsessive-Compulsive Disorder, Predominantly Contamination Obsessions (ICD-11: 6B20 / ICD-10: F42.0)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Neatly dressed, hands show healing dry skin without active erythema",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Clear, fluent, articulate, responsive",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'much more in control', Affect reactive, smiling",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Ego-dystonic contamination obsessions (recognized as irrational), zero suicidal ideation",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 5/6 (Ego-dystonic insight intact)",
                        "isGood": true
                    }
                ],
                "risk": "Minimal Risk. High motivation and therapy engagement.",
                "treatment": "1. Continue Fluoxetine 60mg OD morning. 2. Continue Venusia Max emollient cream. 3. Continue weekly ERP with Dr. Sneha Patil. 4. Advance to Step 6 on exposure hierarchy.",
                "badges": [
                    "OCD Contamination",
                    "Fluoxetine 60mg",
                    "Y-BOCS: 19/40",
                    "ERP Active"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good afternoon Sanjana. How have you been feeling since we increased Fluoxetine to 60mg?\n[00:06] Patient: Hello Dr. Sharma. The intrusive thoughts about germs are still there, but they don't feel as deafening. I can pause before rushing to the sink.\n[00:16] Doctor: That is a massive breakthrough. How are your bilateral hands healing?\n[00:21] Patient: The erythema and bleeding cracks have almost completely healed because I am using the emollient and only washing for 30 seconds instead of 4 minutes.\n[00:31] Doctor: That is wonderful news. How was your in-vivo exposure session with Dr. Sneha last week?\n[00:37] Patient: We practiced touching the door handles at the clinic and waiting 45 minutes before washing. My SUDs anxiety peaked at 8/10, but it dropped to 3/10 on its own without washing!\n[00:48] Doctor: That is the gold-standard ERP extinction curve. Your Y-BOCS score dropped from 28 to 19 today. We will keep Fluoxetine at 60mg and push further on the hierarchy."
            }
        ]
    },
    {
        "id": "pat-9",
        "uhid": "SH-2025-009",
        "name": "Gaurav Gill",
        "age": 31,
        "gender": "Male",
        "dob": "1994-06-11",
        "bloodGroup": "B+",
        "email": "gaurav.gill.law@gmail.com",
        "mobile": "+91 98765 22334",
        "address": "House 512, Sector 18-B, Chandigarh \u2014 160018",
        "occupation": "Senior Associate (Corporate Litigation & Arbitration)",
        "maritalStatus": "Single",
        "education": "B.A. LL.B (Hons) (NLU Delhi)",
        "livingArrangement": "Lives in independent rental apartment",
        "substanceHistory": {
            "alcohol": "Occasional single glass wine on social occasions",
            "tobacco": "Never",
            "caffeine": "3 espressos/day (cut off at 1:00 PM currently)",
            "other": "None"
        },
        "vitals": {
            "bp": "120/76 mmHg",
            "pulse": "70 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "74 kg",
            "height": "179 cm",
            "bmi": "23.1 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-15",
                "bp": "128/82 mmHg",
                "pulse": "74 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "75.0 kg",
                "bmi": "23.4 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-10",
                "bp": "122/78 mmHg",
                "pulse": "72 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "74.5 kg",
                "bmi": "23.2 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-24",
                "bp": "120/76 mmHg",
                "pulse": "70 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "74.0 kg",
                "bmi": "23.1 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            }
        ],
        "allergies": "NKDA.",
        "medicalConditions": "Conditioned Bed-Hyperarousal, Chronic Psychophysiological Insomnia. Normal thyroid and ferritin (RLS ruled out).",
        "psychiatricHistory": "Chronic insomnia onset 14 months ago during high-court trial. No prior major depression, mania, or psychosis.",
        "familyHistory": "Father has chronic early awakening insomnia.",
        "personalHistory": "High-performing advocate, meticulous, perfectionistic preparation, past habit of working on laptop in bed until 2 AM.",
        "currentMeds": [
            {
                "id": "m-901",
                "name": "Melatonin PR",
                "brand": "Meloset PR 3",
                "dose": "3 mg",
                "route": "Oral",
                "freq": "Once daily, night (30 mins before sleep)",
                "timing": "Night (0-0-1)",
                "duration": "4 weeks",
                "startDate": "2025-05-20",
                "instructions": "Take at 11:30 PM. Non-habit-forming circadian chronobiotic.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Circadian Sleep Initiation",
                "status": "Active"
            },
            {
                "id": "m-902",
                "name": "Magnesium Glycinate",
                "brand": "MagEnhance 250",
                "dose": "250 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "startDate": "2025-05-20",
                "instructions": "Take with water at bedtime for somatic muscle relaxation.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Somatic Relaxation Support",
                "status": "Active"
            },
            {
                "id": "m-903",
                "name": "Zolpidem Tartrate",
                "brand": "Zolfresh 5",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "SOS only (max 2 nights/week)",
                "timing": "SOS",
                "duration": "4 weeks (taper)",
                "startDate": "2025-05-15",
                "instructions": "Strict emergency rescue only if awake > 45 mins after stimulus control. Currently abstinent \u00d7 18 days.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Emergency Rescue Hypnotic",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Alprazolam 0.5 mg",
                "duration": "3 weeks (discontinued 2024)",
                "reason": "Tapered and stopped to avoid dependence and daytime cognitive dulling"
            }
        ],
        "caregiver": {
            "name": "Harpreet Gill",
            "relationship": "Father",
            "mobile": "+91 98765 22111",
            "email": "harpreet.gill.chd@gmail.com",
            "address": "House 512, Sector 18-B, Chandigarh \u2014 160018",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true
            }
        },
        "crisisPlan": "Low crisis risk. 20-Minute Stimulus Control Protocol: If awake after 20 minutes in bed, get out of bed immediately. Go to living room couch under dim amber light, read physical non-legal book. Return to bed only when sleepy. No clock-watching.",
        "timeline": [
            {
                "date": "2025-05-15",
                "time": "05:00 PM",
                "type": "Consultation",
                "desc": "Sleep Medicine Intake with Dr. Riya Sharma",
                "details": "ISI: 22/28 (Severe Clinical Insomnia, Sleep Efficiency 56%). Initiated CBT-I sleep restriction + Meloset PR 3mg."
            },
            {
                "date": "2025-06-10",
                "time": "05:30 PM",
                "type": "Consultation",
                "desc": "CBT-I Review with Dr. Riya Sharma",
                "details": "Sleep efficiency increased to 86%. ISI dropped to 12/28. Zero Zolpidem used in 18 days.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good evening Gaurav. How has your sleep diary been looking over the past three weeks?\n[00:06] Patient: Good evening Doctor Sharma. CBT-I with Dr. Sneha was tough for the first four days because of the 6-hour sleep restriction window (12:00 AM to 6:00 AM). But now I fall asleep within 15 minutes of hitting the pillow!\n[00:20] Doctor: That is the exact mechanism of sleep restriction therapy\u2014it builds intense homeostatic sleep pressure to eliminate bed-hyperarousal. Have you needed any Zolpidem?\n[00:29] Patient: Not a single tablet in the last 18 days. I turned my bedside clock away so I cannot see the time, and I stopped taking my laptop into the bedroom.\n[00:39] Doctor: Outstanding discipline. Your Insomnia Severity Index dropped from 22 to 12 today. Because your sleep efficiency is above 85%, we can now expand your sleep window by 15 minutes (11:45 PM to 6:00 AM)."
            },
            {
                "date": "2025-06-24",
                "time": "11:30 AM",
                "type": "Assessment",
                "desc": "ISI Assessment Completed",
                "details": "Score: 12/28 (Subthreshold insomnia, dramatic response to CBT-I)"
            }
        ],
        "therapyPlan": {
            "modality": "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
            "focus": "Sleep restriction, stimulus control, cognitive decatastrophizing of sleep loss, sleep hygiene",
            "freq": "Weekly",
            "status": "Active \u2014 2 sessions completed",
            "referred": "Dr. Sneha Patil (Clinical Psychologist)",
            "goals": "6 sessions over 2 months",
            "sessionProgress": "2 of 6 planned",
            "sessionPct": 33,
            "focusAreas": "Sleep restriction window (12 AM - 6 AM) \u00b7 20-min bed exit rule \u00b7 Turn clock away \u00b7 Bedroom digital ban",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Sleep Psychoeducation & Stimulus Control",
                    "meta": "22 May 2025 \u00b7 45 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Break conditioned bed-arousal association. Establish 20-minute bed exit rule.",
                    "discussion": "Explained two-process sleep model (Process S homeostatic pressure vs Process C circadian rhythm). Banned laptop/phone in bed.",
                    "homework": [
                        "Complete daily Sleep Diary",
                        "Execute 20-minute bed exit rule strictly",
                        "Fixed 6:00 AM wake up 7 days/week"
                    ],
                    "progress": "Patient embraced stimulus control principles."
                },
                {
                    "title": "Session 2 \u2014 Stimulus Control & Sleep Efficiency Review",
                    "meta": "12 Jun 2025 \u00b7 45 min \u00b7 Dr. Sneha Patil",
                    "status": "Completed",
                    "goals": "Calculate Sleep Efficiency (SE) from sleep diary. Expand sleep window by 15 mins.",
                    "discussion": "Sleep Diary review: Time in bed 360 mins, Total sleep time 310 mins (SE = 86.1%). Falling asleep in 15 mins. Expanded window to 11:45 PM - 6:00 AM.",
                    "homework": [
                        "Maintain 11:45 PM - 6:00 AM sleep window",
                        "Daily morning sunlight exposure for 15 mins"
                    ],
                    "progress": "ISI dropped from 22 to 12. Excellent compliance."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-10",
                "time": "05:30 PM",
                "duration": "30 min",
                "type": "Sleep Medicine & CBT-I Clinical Follow-up",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Sleep onset latency previously > 90 mins (now < 15 mins)",
                    "Daytime grogginess on high caffeine"
                ],
                "notes": "31yo advocate with chronic psychophysiological insomnia. 3-week trial of CBT-I sleep restriction + Melatonin PR 3mg. Sleep Efficiency increased from 56% to 86.1%. Zero Zolpidem use in 18 days. ISI dropped from 22 to 12.",
                "diagnosis": "Chronic Insomnia Disorder with Conditioned Sleep Arousal (ICD-11: 7A00 / ICD-10: F51.0 / G47.00)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Neatly dressed, alert, clear eyes, energetic posture",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Fluent, articulate, confident legal cadence",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'refreshed and confident in my sleep', Affect bright, congruent",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Realistic sleep expectations, zero catastrophic sleep beliefs, zero suicidal ideation",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 6/6 (True emotional insight)",
                        "isGood": true
                    }
                ],
                "risk": "Minimal Risk. High health literacy and excellent behavioral compliance.",
                "treatment": "1. Continue Meloset PR 3mg at 11:30 PM. 2. Continue Magnesium Glycinate 250mg bedtime. 3. Expand CBT-I sleep window to 11:45 PM - 6:00 AM. 4. Maintain Zolpidem SOS lock.",
                "badges": [
                    "Chronic Insomnia",
                    "CBT-I 86% SE",
                    "Zolpidem Free",
                    "ISI: 12/28"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Good evening Gaurav. How has your sleep diary been looking over the past three weeks?\n[00:06] Patient: Good evening Doctor Sharma. CBT-I with Dr. Sneha was tough for the first four days because of the 6-hour sleep restriction window (12:00 AM to 6:00 AM). But now I fall asleep within 15 minutes of hitting the pillow!\n[00:20] Doctor: That is the exact mechanism of sleep restriction therapy\u2014it builds intense homeostatic sleep pressure to eliminate bed-hyperarousal. Have you needed any Zolpidem?\n[00:29] Patient: Not a single tablet in the last 18 days. I turned my bedside clock away so I cannot see the time, and I stopped taking my laptop into the bedroom.\n[00:39] Doctor: Outstanding discipline. Your Insomnia Severity Index dropped from 22 to 12 today. Because your sleep efficiency is above 85%, we can now expand your sleep window by 15 minutes (11:45 PM to 6:00 AM)."
            }
        ]
    },
    {
        "id": "pat-10",
        "uhid": "SH-2025-010",
        "name": "Zoya Khan",
        "age": 22,
        "gender": "Female",
        "dob": "2003-10-25",
        "bloodGroup": "AB+",
        "email": "zoya.khan.lit@gmail.com",
        "mobile": "+91 98765 33445",
        "address": "Hostel 3, Room 204, University of Hyderabad, Gachibowli, Hyderabad \u2014 500046",
        "occupation": "Postgraduate Literature Student & Teaching Assistant",
        "maritalStatus": "Single",
        "education": "B.A. English (St. Francis) \u00b7 Pursuing M.A. English Literature",
        "livingArrangement": "Lives in university student hostel",
        "substanceHistory": {
            "alcohol": "Occasional social wine in past (agreed to complete abstinence on DBT contract)",
            "tobacco": "Never",
            "caffeine": "1 cup milk tea morning",
            "other": "None"
        },
        "vitals": {
            "bp": "112/72 mmHg",
            "pulse": "76 bpm",
            "temp": "98.2 \u00b0F",
            "spo2": "99%",
            "respiratoryRate": "16/min",
            "weight": "51 kg",
            "height": "162 cm",
            "bmi": "19.4 kg/m\u00b2"
        },
        "vitalsHistory": [
            {
                "date": "2025-05-10",
                "bp": "118/76 mmHg",
                "pulse": "82 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "52.0 kg",
                "bmi": "19.8 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-08",
                "bp": "114/74 mmHg",
                "pulse": "78 bpm",
                "temp": "98.4 \u00b0F",
                "spo2": "99%",
                "weight": "51.5 kg",
                "bmi": "19.6 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            },
            {
                "date": "2025-06-24",
                "bp": "112/72 mmHg",
                "pulse": "76 bpm",
                "temp": "98.2 \u00b0F",
                "spo2": "99%",
                "weight": "51.0 kg",
                "bmi": "19.4 kg/m\u00b2",
                "recordedBy": "Nurse Lata"
            }
        ],
        "allergies": "NKDA. Stevens-Johnson syndrome rash precautions reviewed for Lamotrigine.",
        "medicalConditions": "Non-Suicidal Self-Injury (NSSI) history (superficial wrist scratches in 2024, fully healed, zero NSSI in 4 months).",
        "psychiatricHistory": "Emotionally Unstable Personality Disorder (Borderline Type). Recurrent affective lability, abandonment panic, chronic feelings of emptiness.",
        "familyHistory": "Mother treated for unipolar depression; High-conflict parental divorce during adolescence.",
        "personalHistory": "High creative writer, deeply empathetic, prone to splitting (idealization and devaluation) during interpersonal crises.",
        "currentMeds": [
            {
                "id": "m-1001",
                "name": "Lamotrigine",
                "brand": "Lamitor 50",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "6 weeks",
                "startDate": "2025-05-10",
                "instructions": "Take after breakfast. Titrated slowly for affective stabilization and impulsivity reduction. Report any skin rash immediately.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Affective Instability / BPD",
                "status": "Active"
            },
            {
                "id": "m-1002",
                "name": "Quetiapine",
                "brand": "Qutan 25",
                "dose": "25 mg",
                "route": "Oral",
                "freq": "SOS at bedtime during severe crisis",
                "timing": "SOS (max 1/day)",
                "duration": "4 weeks",
                "startDate": "2025-05-10",
                "instructions": "Take max 1 tablet/day during severe emotional overwhelm after attempting DBT TIPP skills first.",
                "prescriber": "Dr. Riya Sharma",
                "indication": "Acute Emotional Crisis SOS",
                "status": "Active"
            }
        ],
        "pastMeds": [
            {
                "name": "Fluoxetine 20 mg",
                "duration": "2 months (discontinued 2024)",
                "reason": "Induced emotional agitation without stabilizing affective swings"
            },
            {
                "name": "Lamotrigine 25 mg",
                "duration": "2 weeks (titrated to 50mg on 2025-05-24)",
                "reason": "Standard slow titration protocol"
            }
        ],
        "caregiver": {
            "name": "Yasmin Khan",
            "relationship": "Sister",
            "mobile": "+91 98765 33111",
            "email": "yasmin.khan.hyd@gmail.com",
            "address": "Banjara Hills, Road No. 12, Hyderabad \u2014 500034",
            "permissions": {
                "appointments": true,
                "prescriptions": true,
                "assessments": true,
                "crisisAlerts": true
            }
        },
        "crisisPlan": "DBT TIPP Crisis Protocol Active. Step 1: Temperature (Ice pack on eyes/face for 30s). Step 2: Intense exercise (jumping jacks for 2 mins). Step 3: Paced breathing (4s in, 7s out). Step 4: Paired muscle relaxation. Emergency Contacts: Sister Yasmin Khan, DBT Therapist Dr. Shalini Mukhopadhyay. Helplines: Vandrevala (9999 666 555), Tele-MANAS (14416). No NSSI contract signed.",
        "timeline": [
            {
                "date": "2025-05-10",
                "time": "02:00 PM",
                "type": "Consultation",
                "desc": "DBT Intake with Dr. Riya Sharma",
                "details": "BSL-23: 2.8/4.0. PHQ-9: 20/27 (Q9=1). Initiated Lamotrigine 25mg titration + Comprehensive DBT coaching."
            },
            {
                "date": "2025-05-24",
                "time": "02:30 PM",
                "type": "Consultation",
                "desc": "Titration Follow-up with Dr. Riya Sharma",
                "details": "Titrated Lamotrigine to 50mg OD. Zero skin rash. Commenced DBT Diary Card."
            },
            {
                "date": "2025-06-18",
                "time": "03:00 PM",
                "type": "Consultation",
                "desc": "DBT Skills Progress Review with Dr. Riya Sharma",
                "details": "BSL-23 improved to 1.9/4.0. Successfully used TIPP skills during thesis conflict. Zero NSSI.",
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Hello Zoya. It is wonderful to see you today. How have your DBT skills coaching sessions with Dr. Shalini been going?\n[00:08] Patient: Hello Dr. Sharma. It has been a challenging week with my literature thesis supervisor, but for the first time, I didn't spiral into self-harm or impulsive shouting.\n[00:20] Doctor: That is tremendous emotional growth. What specific skill did you use when the urge arose?\n[00:27] Patient: When I got back to the hostel, my chest felt like it was on fire. I took an ice pack from the communal fridge and held it over my eyes and cheeks for 30 seconds\u2014the TIPP skill. My heart rate dropped immediately, and I wrote in my diary card instead.\n[00:43] Doctor: That is textbook application of the mammalian dive reflex to de-escalate amygdala hyperarousal. How is the Lamotrigine 50mg feeling?\n[00:52] Patient: No rash at all, and I feel like the baseline emotional waves don't crash over my head as violently anymore.\n[01:00] Doctor: Your BSL-23 score came down from 2.8 to 1.9 today. We will keep Lamotrigine at 50mg and continue weekly DBT skills training."
            },
            {
                "date": "2025-06-24",
                "time": "11:30 AM",
                "type": "Assessment",
                "desc": "PHQ-9 Assessment Completed",
                "details": "Score: 16/27 (Moderately Severe, down from 20/27, Q9=1 passive SI)"
            }
        ],
        "therapyPlan": {
            "modality": "Dialectical Behavior Therapy (DBT) Skills Coaching",
            "focus": "Distress tolerance (TIPP), emotion regulation, interpersonal effectiveness (DEAR MAN), mindfulness",
            "freq": "Weekly",
            "status": "Active \u2014 3 sessions completed",
            "referred": "Dr. Shalini Mukhopadhyay (Clinical Psychologist)",
            "goals": "12 sessions over 4 months",
            "sessionProgress": "3 of 12 planned",
            "sessionPct": 25,
            "focusAreas": "DBT Diary Card \u00b7 TIPP skills for crisis \u00b7 STOP skill \u00b7 Opposite action \u00b7 DEAR MAN assertiveness",
            "sessions": [
                {
                    "title": "Session 1 \u2014 Biosocial Model & Diary Card Setup",
                    "meta": "15 May 2025 \u00b7 50 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Explain Linehan's Biosocial Model of emotional vulnerability. Setup Daily DBT Diary Card.",
                    "discussion": "Validated emotional sensitivity. Explained how invalidating childhood environments lead to emotion dysregulation. Structured daily diary card for tracking urge to self-harm (0-5), sadness, anger, and skills used.",
                    "homework": [
                        "Complete daily DBT diary card before bed",
                        "No NSSI safety commitment"
                    ],
                    "progress": "Patient felt deeply heard and understood."
                },
                {
                    "title": "Session 2 \u2014 Wise Mind & Non-Judgmental Stance",
                    "meta": "29 May 2025 \u00b7 50 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Differentiate Emotional Mind, Reasonable Mind, and Wise Mind.",
                    "discussion": "Practiced mindful awareness of emotional surges without labeling them as 'bad' or 'broken'. Taught the STOP skill (Stop, Take a step back, Observe, Proceed mindfully).",
                    "homework": [
                        "Practice 3-minute Wise Mind breathing twice daily",
                        "Use STOP skill when feeling abandoned"
                    ],
                    "progress": "Diary card showed 100% logging compliance. Used STOP skill twice."
                },
                {
                    "title": "Session 3 \u2014 Distress Tolerance (TIPP Skills for Crisis)",
                    "meta": "12 Jun 2025 \u00b7 50 min \u00b7 Dr. Shalini Mukhopadhyay",
                    "status": "Completed",
                    "goals": "Master physical crisis survival skills (TIPP: Temperature, Intense exercise, Paced breathing, Paired muscle relaxation).",
                    "discussion": "Demonstrated ice bowl immersion for triggering mammalian dive reflex during high emotional arousal (> 80/100). Roleplayed coping with roommate friction.",
                    "homework": [
                        "Keep gel ice pack in hostel freezer",
                        "Execute TIPP protocol during peak distress"
                    ],
                    "progress": "Successfully aborted NSSI urge during thesis dispute using ice pack TIPP skill."
                }
            ]
        },
        "pastConsultations": [
            {
                "date": "2025-06-18",
                "time": "03:00 PM",
                "duration": "45 min",
                "type": "Psychiatric Evaluation \u2014 BPD & DBT Skills Review",
                "doctor": "Dr. Riya Sharma",
                "location": "In-person \u00b7 Room 204",
                "complaints": [
                    "Affective lability",
                    "Fear of rejection from thesis mentor",
                    "Urge to self-harm aborted via TIPP skill"
                ],
                "notes": "22yo literature graduate student with Borderline Personality Disorder. Lamotrigine 50mg OD well-tolerated with zero dermatological rash. Highly engaged in DBT skills coaching with Dr. Shalini. Successfully executed TIPP ice pack skill during acute distress. Zero NSSI acts in 4 months. BSL-23 score 1.9/4.0.",
                "diagnosis": "Emotionally Unstable Personality Disorder, Borderline Type (ICD-11: 6D11 / ICD-10: F60.3)",
                "mse": [
                    {
                        "key": "Appearance",
                        "val": "Artistically dressed, healed transverse scars on left forearm (no fresh lesions), expressive",
                        "isGood": true
                    },
                    {
                        "key": "Speech",
                        "val": "Fluent, emotionally colored, articulate literary vocabulary",
                        "isGood": true
                    },
                    {
                        "key": "Mood & Affect",
                        "val": "Mood 'feeling more resilient', Affect moderately reactive, appropriate",
                        "isGood": true
                    },
                    {
                        "key": "Thought Content",
                        "val": "Interpersonal friction, passive SI (Q9 = 1), zero active plan, strong DBT safety alliance",
                        "isGood": true
                    },
                    {
                        "key": "Insight",
                        "val": "Insight Grade 5/6 (Aware of emotional dysregulation patterns)",
                        "isGood": true
                    }
                ],
                "risk": "Moderate Longitudinal Risk \u00b7 Low Acute Risk. Active DBT contract, ice pack TIPP skills, sister Yasmin available on speed dial.",
                "treatment": "1. Continue Lamotrigine 50mg OD morning. 2. Quetiapine 25mg SOS (max 1/day) reserved for extreme distress. 3. Continue weekly DBT skills coaching with Dr. Shalini. 4. Daily diary card tracking.",
                "badges": [
                    "BPD / Emotion Dysreg",
                    "DBT Active",
                    "Zero NSSI (4m)",
                    "TIPP Mastered"
                ],
                "hasRecording": true,
                "recordingTranscript": "[00:01] Doctor: Hello Zoya. It is wonderful to see you today. How have your DBT skills coaching sessions with Dr. Shalini been going?\n[00:08] Patient: Hello Dr. Sharma. It has been a challenging week with my literature thesis supervisor, but for the first time, I didn't spiral into self-harm or impulsive shouting.\n[00:20] Doctor: That is tremendous emotional growth. What specific skill did you use when the urge arose?\n[00:27] Patient: When I got back to the hostel, my chest felt like it was on fire. I took an ice pack from the communal fridge and held it over my eyes and cheeks for 30 seconds\u2014the TIPP skill. My heart rate dropped immediately, and I wrote in my diary card instead.\n[00:43] Doctor: That is textbook application of the mammalian dive reflex to de-escalate amygdala hyperarousal. How is the Lamotrigine 50mg feeling?\n[00:52] Patient: No rash at all, and I feel like the baseline emotional waves don't crash over my head as violently anymore.\n[01:00] Doctor: Your BSL-23 score came down from 2.8 to 1.9 today. We will keep Lamotrigine at 50mg and continue weekly DBT skills training."
            }
        ]
    }
],
  doctors: [
    {
      id: "doc-1",
      name: "Dr. Riya Sharma",
      specialty: "General Psychiatry",
      qualification: "MD Psychiatry, DPM (MCI MH-2019-4521)",
      experience: "8 years",
      languages: "English, Hindi, Punjabi",
      fee: 1000,
      portrait: "assets/riya_sharma_portrait.png",
      areas: "Mood Disorders, Anxiety, Sleep disturbances",
      slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
      availability: "Available"
    },
    {
      id: "doc-2",
      name: "Dr. Vivek Anand",
      specialty: "Child & Adolescent Psychiatry",
      qualification: "MD Psychiatry, Fellowship in Child Psychiatry (MCI MH-2015-1284)",
      experience: "12 years",
      languages: "English, Kannada, Hindi, Tamil",
      fee: 1200,
      portrait: "assets/vivek_anand_portrait.png",
      areas: "ADHD, Autism Spectrum, Adolescent Anxiety, Bipolar",
      slots: ["10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM"],
      availability: "In-Consult"
    },
    {
      id: "doc-3",
      name: "Dr. Ramesh Kumar",
      specialty: "General Psychiatry",
      qualification: "MD Psychiatry, Senior Consultant (MCI MH-2005-9988)",
      experience: "20 years",
      languages: "English, Hindi, Telugu",
      fee: 1500,
      portrait: "assets/riya_sharma_portrait.png", // fallback
      areas: "Geriatric Psychiatry, Addiction Psychiatry",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
      availability: "On-Leave"
    },
    {
      id: "doc-4",
      name: "Dr. Sneha Patil",
      specialty: "CBT Therapist",
      qualification: "Ph.D. Clinical Psychology (RCI A-77665)",
      experience: "6 years",
      languages: "English, Marathi, Hindi",
      fee: 1200,
      portrait: "assets/riya_sharma_portrait.png", // fallback
      areas: "Cognitive Behavioral Therapy, Distress Tolerance",
      slots: ["10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
      availability: "Available"
    }
  ],

  appointments: [
    {
        "id": "appt-1",
        "patientId": "pat-1",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "09:00 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-2",
        "patientId": "pat-2",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "09:30 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-3",
        "patientId": "pat-3",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "10:00 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-4",
        "patientId": "pat-4",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "10:30 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-5",
        "patientId": "pat-5",
        "doctorId": "doc-2",
        "doctorName": "Dr. Vivek Anand",
        "date": "2025-06-24",
        "time": "11:00 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1200,
        "status": "Confirmed"
    },
    {
        "id": "appt-6",
        "patientId": "pat-6",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "11:30 AM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-7",
        "patientId": "pat-7",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "12:00 PM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-8",
        "patientId": "pat-8",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "12:30 PM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-9",
        "patientId": "pat-9",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "01:00 PM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    },
    {
        "id": "appt-10",
        "patientId": "pat-10",
        "doctorId": "doc-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "time": "01:30 PM",
        "type": "Follow-up Consultation",
        "mode": "In-person",
        "fee": 1000,
        "status": "Confirmed"
    }
],
  assessments: [
    {
        "id": "assess-1",
        "patientId": "pat-1",
        "name": "PHQ-9",
        "purpose": "Depression Severity scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-24",
        "status": "Pending",
        "dueDate": "2025-06-30",
        "estimatedTime": "~3 mins",
        "score": null,
        "severity": null,
        "completedDate": null,
        "responses": null
    },
    {
        "id": "assess-2",
        "patientId": "pat-1",
        "name": "Sleep Diary",
        "purpose": "Weekly Sleep Quality tracker",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-24",
        "status": "Pending",
        "dueDate": "2025-06-30",
        "estimatedTime": "~2 mins",
        "score": null,
        "severity": null,
        "completedDate": null,
        "responses": null
    },
    {
        "id": "assess-1b",
        "patientId": "pat-1",
        "name": "GAD-7",
        "purpose": "Anxiety Severity scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-24",
        "status": "Pending",
        "dueDate": "2025-06-30",
        "estimatedTime": "~3 mins",
        "score": null,
        "severity": null,
        "completedDate": null,
        "responses": null
    },
    {
        "id": "assess-3",
        "patientId": "pat-1",
        "name": "PHQ-9",
        "purpose": "Depression Severity scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-24",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 18,
        "severity": "Moderately Severe",
        "completedDate": "2025-06-24 08:41 AM",
        "acknowledged": false,
        "responses": {
            "q1": 3,
            "q2": 3,
            "q3": 2,
            "q4": 3,
            "q5": 2,
            "q6": 2,
            "q7": 1,
            "q8": 1,
            "q9": 1
        }
    },
    {
        "id": "assess-4",
        "patientId": "pat-1",
        "name": "GAD-7",
        "purpose": "Anxiety Severity scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-10",
        "status": "Completed",
        "dueDate": "2025-06-10",
        "score": 12,
        "severity": "Moderate",
        "completedDate": "2025-06-10 09:15 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 2,
            "q5": 2,
            "q6": 1,
            "q7": 1
        }
    },
    {
        "id": "assess-5",
        "patientId": "pat-2",
        "name": "GAD-7",
        "purpose": "Anxiety scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-15",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 11,
        "severity": "Moderate",
        "completedDate": "2025-06-24 09:10 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 1,
            "q4": 2,
            "q5": 2,
            "q6": 1,
            "q7": 1
        }
    },
    {
        "id": "assess-6",
        "patientId": "pat-2",
        "name": "PSWQ",
        "purpose": "Worry Inventory",
        "assignedBy": "Dr. Shalini Mukhopadhyay",
        "assignedDate": "2025-06-01",
        "status": "Completed",
        "dueDate": "2025-06-15",
        "score": 64,
        "severity": "High Worry",
        "completedDate": "2025-06-15 04:30 PM",
        "acknowledged": true,
        "responses": {
            "q1": 4,
            "q2": 4,
            "q3": 5,
            "q4": 4,
            "q5": 4
        }
    },
    {
        "id": "assess-7",
        "patientId": "pat-3",
        "name": "PHQ-9",
        "purpose": "Depression Severity scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-24",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 22,
        "severity": "Severe",
        "completedDate": "2025-06-24 09:55 AM",
        "acknowledged": false,
        "responses": {
            "q1": 3,
            "q2": 3,
            "q3": 3,
            "q4": 3,
            "q5": 2,
            "q6": 3,
            "q7": 2,
            "q8": 1,
            "q9": 2
        }
    },
    {
        "id": "assess-8",
        "patientId": "pat-3",
        "name": "MDQ",
        "purpose": "Mood Disorder Questionnaire",
        "assignedBy": "Dr. Vivek Anand",
        "assignedDate": "2025-04-10",
        "status": "Completed",
        "dueDate": "2025-04-10",
        "score": 11,
        "severity": "Positive Screen (Bipolar Spectrum)",
        "completedDate": "2025-04-10 11:15 AM",
        "acknowledged": true,
        "responses": {
            "q1": 1,
            "q2": 1,
            "q3": 1,
            "q4": 1,
            "q5": 1,
            "q6": 1,
            "q7": 1,
            "q8": 1,
            "q9": 1,
            "q10": 1,
            "q11": 1,
            "q12": 0,
            "q13": 0
        }
    },
    {
        "id": "assess-9",
        "patientId": "pat-4",
        "name": "AUDIT",
        "purpose": "Alcohol Use scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-15",
        "status": "Completed",
        "dueDate": "2025-06-23",
        "score": 14,
        "severity": "Harmful Use (Reduced from 26)",
        "completedDate": "2025-06-23 06:30 PM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 1,
            "q4": 1,
            "q5": 2,
            "q6": 1,
            "q7": 2,
            "q8": 1,
            "q9": 1,
            "q10": 1
        }
    },
    {
        "id": "assess-10",
        "patientId": "pat-4",
        "name": "PACS",
        "purpose": "Penn Alcohol Craving Scale",
        "assignedBy": "Dr. Sneha Patil",
        "assignedDate": "2025-06-20",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 10,
        "severity": "Mild Craving",
        "completedDate": "2025-06-24 08:30 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 2,
            "q5": 2
        }
    },
    {
        "id": "assess-11",
        "patientId": "pat-5",
        "name": "ASRS v1.1",
        "purpose": "Adult ADHD Self-Report Scale",
        "assignedBy": "Dr. Vivek Anand",
        "assignedDate": "2025-06-15",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 11,
        "severity": "Moderate (Improved from 22/24)",
        "completedDate": "2025-06-24 10:00 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 2,
            "q5": 2,
            "q6": 1
        }
    },
    {
        "id": "assess-12",
        "patientId": "pat-6",
        "name": "PHQ-9",
        "purpose": "Depression scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-05-12",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 12,
        "severity": "Moderate",
        "completedDate": "2025-06-24 10:45 AM",
        "acknowledged": true,
        "responses": {
            "q1": 1,
            "q2": 2,
            "q3": 2,
            "q4": 1,
            "q5": 2,
            "q6": 1,
            "q7": 1,
            "q8": 1,
            "q9": 1
        }
    },
    {
        "id": "assess-13",
        "patientId": "pat-7",
        "name": "MoCA",
        "purpose": "Montreal Cognitive Assessment",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-05-20",
        "status": "Completed",
        "dueDate": "2025-05-20",
        "score": 22,
        "severity": "Mild Cognitive Impairment",
        "completedDate": "2025-05-20 11:45 AM",
        "acknowledged": true,
        "responses": {
            "visuospatial": 3,
            "naming": 3,
            "attention": 5,
            "language": 2,
            "abstraction": 2,
            "delayedRecall": 1,
            "orientation": 6
        }
    },
    {
        "id": "assess-14",
        "patientId": "pat-8",
        "name": "Y-BOCS",
        "purpose": "Yale-Brown Obsessive Compulsive Scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-10",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 19,
        "severity": "Moderate (Reduced from 28)",
        "completedDate": "2025-06-24 09:30 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 2,
            "q5": 2,
            "q6": 2,
            "q7": 2,
            "q8": 2,
            "q9": 2,
            "q10": 1
        }
    },
    {
        "id": "assess-15",
        "patientId": "pat-9",
        "name": "ISI",
        "purpose": "Insomnia Severity Index",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-10",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 12,
        "severity": "Subthreshold / Moderate",
        "completedDate": "2025-06-24 11:30 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 2,
            "q5": 2,
            "q6": 1,
            "q7": 1
        }
    },
    {
        "id": "assess-16",
        "patientId": "pat-10",
        "name": "BSL-23",
        "purpose": "Borderline Symptom List",
        "assignedBy": "Dr. Shalini Mukhopadhyay",
        "assignedDate": "2025-06-08",
        "status": "Completed",
        "dueDate": "2025-06-18",
        "score": 44,
        "severity": "Moderate Severity (1.9/4.0)",
        "completedDate": "2025-06-18 02:45 PM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 2,
            "q4": 1,
            "q5": 2
        }
    },
    {
        "id": "assess-17",
        "patientId": "pat-10",
        "name": "PHQ-9",
        "purpose": "Depression scale",
        "assignedBy": "Dr. Riya Sharma",
        "assignedDate": "2025-06-18",
        "status": "Completed",
        "dueDate": "2025-06-24",
        "score": 16,
        "severity": "Moderately Severe",
        "completedDate": "2025-06-24 11:30 AM",
        "acknowledged": true,
        "responses": {
            "q1": 2,
            "q2": 2,
            "q3": 3,
            "q4": 2,
            "q5": 2,
            "q6": 2,
            "q7": 1,
            "q8": 1,
            "q9": 1
        }
    }
],
  prescriptions: [
    {
        "id": "rx-1",
        "sessionType": "Intake Assessment",
        "patientId": "pat-1",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-24",
        "diagnosis": "Major Depressive Disorder, Single Episode, Moderate-Severe (ICD-11: 6A70.1 / ICD-10: F32.1)",
        "specifiers": "First episode \u00b7 Severe anhedonia prominent \u00b7 Early morning awakening at 4 AM \u00b7 Without psychotic features",
        "vitals": {
            "bp": "118/76 mmHg",
            "pulse": "72 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "58 kg",
            "bmi": "19.6 kg/m\u00b2"
        },
        "chiefComplaint": "Depressed mood \u00d7 3 months, 4 AM early morning awakening, severe anhedonia, psychomotor slowing, passive suicidal thoughts ('wish I didn't wake up')",
        "onset": "3 months ago following corporate restructuring",
        "duration": "3 months continuous",
        "progression": "Progressively worsening sleep fragmentation and anhedonia",
        "functionalImpact": "On medical leave from product management role; social withdrawal",
        "triggers": "Job termination during corporate layoffs, performance perfectionism",
        "hpiNarrative": "34-year-old male Senior Product Manager presenting with 3-month major depressive episode following corporate restructuring. Severe anhedonia, sleep architecture fragmentation, feelings of worthlessness. Strong protective alliance with wife Sunitha and sister Ananya.",
        "mse": {
            "appearance": [
                "Well-kempt",
                "cooperative"
            ],
            "behaviour": [
                "Psychomotor slowing",
                "good eye contact"
            ],
            "speech": [
                "Slow rate",
                "low volume",
                "normal coherence"
            ],
            "affect": [
                "Constricted",
                "tearful",
                "mood-congruent"
            ],
            "thoughtForm": [
                "Goal-directed",
                "linear",
                "no flight of ideas"
            ],
            "thoughtContent": [
                "Worthlessness",
                "hopelessness",
                "passive suicidal ideation without intent"
            ],
            "perception": [
                "No hallucinations",
                "no illusions"
            ],
            "cognition": [
                "Alert",
                "mild concentration lag",
                "oriented \u00d7 3"
            ],
            "insight": [
                "Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Like being underwater",
            "summary": "Cooperative male with severe psychomotor depression, melancholic sleep disturbance, passive suicidal ideation without intent, intact cognitive reality testing and high insight."
        },
        "medicines": [
            {
                "name": "Escitalopram",
                "brand": "Nexito 10",
                "strength": "10 mg",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "Once daily, night (after dinner)",
                "timing": "Night (0-0-1)",
                "duration": "4 weeks",
                "instructions": "Take after food. May cause mild initial nausea or headache.",
                "indication": "Major Depressive Disorder (SSRI)",
                "status": "Active"
            },
            {
                "name": "Clonazepam",
                "brand": "Zapiz 0.5",
                "strength": "0.5 mg",
                "dose": "0.5 mg",
                "route": "Oral",
                "freq": "Bedtime (short course)",
                "timing": "Bedtime (0-0-1)",
                "duration": "2 weeks only",
                "instructions": "For sleep onset and severe anticipatory anxiety. Taper off after 14 days. Do not stop abruptly.",
                "indication": "Initial Insomnia & Anxiety Bridge",
                "status": "Active"
            },
            {
                "name": "Levothyroxine",
                "brand": "Thyronorm 25",
                "strength": "25 mcg",
                "dose": "25 mcg",
                "route": "Oral",
                "freq": "Once daily, empty stomach (morning)",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "instructions": "Take early morning 30 mins before tea/coffee with a full glass of water.",
                "indication": "Subclinical Hypothyroidism",
                "status": "Active"
            },
            {
                "name": "Amlodipine",
                "brand": "Amlopres 5",
                "strength": "5 mg",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "instructions": "Take with water after breakfast.",
                "indication": "Essential Hypertension",
                "status": "Active"
            },
            {
                "name": "Cholecalciferol (Vit D3)",
                "brand": "Calcirol 60k",
                "strength": "60,000 IU",
                "dose": "60,000 IU",
                "route": "Oral",
                "freq": "Once weekly with warm milk",
                "timing": "Weekly (Sunday)",
                "duration": "8 weeks",
                "instructions": "Weekly sachet dissolved in warm milk to treat Vitamin D deficiency (16 ng/mL).",
                "indication": "Vitamin D Deficiency",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Cognitive Behavioural Therapy (CBT)",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "10\u201312 sessions: Behavioral activation, thought records, circadian pacing",
            "homework": [
                "Daily Activity Diary (record mastery & pleasure 0-10)",
                "15-minute gentle morning sunlight walk at 7:00 AM with spouse"
            ]
        },
        "labsOrdered": [
            "TSH Recheck (4.8 mIU/L) \u2014 Due in 3 months",
            "Vitamin D (25-OH) \u2014 Recheck post 8-week Calcirol course",
            "Hemoglobin / Iron Panel \u2014 Recheck for mild anemia (11.8 g/dL)"
        ],
        "lifestyleAdvice": [
            "Circadian pacing: Fixed wake-up time at 7:00 AM with 15 mins morning sunlight exposure",
            "Strict avoidance of alcohol while on Escitalopram & Clonazepam",
            "Daily 10-minute 4-7-8 diaphragmatic breathing for ruminative anxiety at 4 AM"
        ],
        "risk": {
            "suicide": "low-moderate",
            "suicidalIdeation": "passive",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Engaged in weekly CBT",
                "Supportive alliance with spouse Sunitha & sister Ananya",
                "Medication compliance",
                "Future-oriented regarding career return"
            ],
            "notes": "Stanley-Brown Safety Protocol active. Lethal means restricted: All medications locked and dispensed by spouse Sunitha (+91 98765 11111)."
        },
        "emergencyPlan": "In case of acute distress, call primary caregiver Sunitha (+91 98765 11111) or 24x7 National Tele-MANAS: 14416 / 1800 891 4416 (Toll-Free).",
        "followupDate": "2025-07-08",
        "followupInterval": 14,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good morning Advait. I am Dr. Riya Sharma. I understand your sister and wife Sunitha encouraged you to come in today. How can I help you?\n[00:08] Patient: Yes, hello doctor. I have just been feeling really low for the past three months. Ever since I lost my job as a product manager during the layoffs, it feels like everything is falling apart.\n[00:18] Doctor: I am sorry to hear about your job. Can you describe what this low mood feels like on a daily basis?\n[00:25] Patient: It is like being underwater. I wake up around 4 AM every single morning with a heavy feeling in my chest and cannot fall back asleep. I have no interest in doing anything, even things I used to love like cycling.\n[00:37] Doctor: That sounds incredibly heavy and exhausting. Are you experiencing any thoughts of suicide or self-harm?\n[00:44] Patient: Sometimes I just feel like it would be easier if I did not wake up at all. But I don't have any plan or intention to end my life. I think about my sister and Sunitha and know I cannot do that.\n[00:54] Doctor: Thank you for sharing that with me. We call those passive suicidal thoughts. We will take this very seriously, build a safety plan, and start treatment. I recommend Escitalopram 10mg to help stabilize the neurotransmitters, and a referral for Cognitive Behavioral Therapy. How do you feel about that plan?\n[01:10] Patient: I am open to anything that helps. I just want to feel like myself again.\n[01:16] Doctor: Absolutely. We will take this step by step. We will start with a weekly check-in.",
        "notes": "34-year-old male Senior Product Manager presenting with 3-month major depressive episode following corporate restructuring. Severe anhedonia, sleep architecture fragmentation, feelings of worthlessness. Strong protective alliance with wife Sunitha and sister Ananya."
    },
    {
        "id": "rx-2",
        "sessionType": "Regular Session",
        "patientId": "pat-2",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-05-15",
        "diagnosis": "Generalized Anxiety Disorder with Panic Paroxysms (ICD-11: 6A71 / ICD-10: F41.1)",
        "specifiers": "Frequent nocturnal panic attacks \u00b7 Somatic tension prominent \u00b7 Anticipatory worry before grand rounds",
        "vitals": {
            "bp": "120/78 mmHg",
            "pulse": "76 bpm",
            "temp": "98.6 \u00b0F",
            "weight": "54 kg",
            "bmi": "21.1 kg/m\u00b2"
        },
        "chiefComplaint": "Progressive somatic anxiety \u00d7 6 months, nocturnal panic attacks with palpitations & diaphoresis, anticipatory worry before pediatric grand rounds",
        "onset": "6 months ago with increased pediatric clinical duties",
        "duration": "6 months continuous",
        "progression": "Increased frequency of autonomic panic paroxysms",
        "functionalImpact": "Avoidance of departmental presentations; somatic fatigue",
        "triggers": "High-stakes pediatric emergency decisions, departmental presentations",
        "hpiNarrative": "28-year-old female pediatrician presenting with 6-month progressive somatic anxiety, anticipatory catastrophic thinking, and recurrent nocturnal panic attacks triggered by high-stakes clinical responsibilities.",
        "mse": {
            "appearance": [
                "Tense posture",
                "cooperative",
                "well-groomed"
            ],
            "behaviour": [
                "Restless foot tapping",
                "alert"
            ],
            "speech": [
                "Rapid rate",
                "high volume",
                "fluent"
            ],
            "affect": [
                "Anxious",
                "congruent",
                "tense"
            ],
            "thoughtForm": [
                "Goal-directed",
                "hypervigilant"
            ],
            "thoughtContent": [
                "Future clinical worries",
                "panic triggers",
                "no suicidal ideation"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Alert",
                "focused on somatic sensations"
            ],
            "insight": [
                "Good (Grade 6) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Keyed up and exhausted",
            "summary": "Alert female physician with high somatic anxiety, sympathetic hyperarousal, intact reality testing and excellent psychological insight."
        },
        "medicines": [
            {
                "name": "Sertraline",
                "brand": "Zosert 50",
                "strength": "50 mg",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "instructions": "Take with water after breakfast. Maintain daily regularity.",
                "indication": "Generalized Anxiety Disorder (SSRI)",
                "status": "Active"
            },
            {
                "name": "Pregabalin",
                "brand": "Maxgalin 75",
                "strength": "75 mg",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "4 weeks",
                "instructions": "Take at bedtime for somatic muscle tension and initial sleep latency.",
                "indication": "Somatic Anxiety & Muscle Tension",
                "status": "Active"
            },
            {
                "name": "Propranolol",
                "brand": "Ciplar 10",
                "strength": "10 mg",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "SOS (max 2 tabs/week)",
                "timing": "SOS (As needed)",
                "duration": "As needed",
                "instructions": "Take 30 mins before large pediatric grand rounds if autonomic tremors peak.",
                "indication": "Performance / Autonomic Palpitations",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "CBT & Interoceptive Exposure",
            "therapist": "Dr. Shalini Mukhopadhyay",
            "frequency": "Weekly",
            "goals": "Decatastrophizing somatic cues, box breathing, interoceptive hyperventilation exposure",
            "homework": [
                "Box breathing 4-4-4-4 twice daily (morning & evening)",
                "Worry time scheduling (20 minutes at 6:00 PM strictly)"
            ]
        },
        "labsOrdered": [
            "12-Lead ECG (Normal Sinus Rhythm, HR 76 bpm, QTc 408 ms)",
            "Serum Electrolytes (Na 140 / K 4.2)",
            "TSH Profile (2.1 mIU/L Normal)"
        ],
        "lifestyleAdvice": [
            "Caffeine reduction: limit filter coffee to 1 cup/day before noon",
            "Daily 20-minute evening yoga & pranayama",
            "Maintain strict work-home boundary after NICU duty rounds"
        ],
        "risk": {
            "suicide": "none",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "High psychological insight",
                "Supportive spouse Sanjay & 2 children",
                "Committed to interoceptive exposure",
                "Strong professional purpose in pediatrics"
            ],
            "notes": "Low clinical risk. No suicidal ideation. High distress from somatic panic symptoms."
        },
        "emergencyPlan": "In case of severe panic or distress, contact spouse Sanjay (+91 98200 44555) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 21,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good afternoon Dr. Anjali. How have you been feeling since our last visit?\n[00:06] Patient: Hello Riya. The physical anxiety symptoms are slightly better. The palpitations aren't as intense, but the underlying worry is still persistent.\n[00:15] Doctor: Understood. Are you experiencing the panic attacks during your clinical rounds or meetings?\n[00:21] Patient: Mostly before our weekly pediatric department meetings. I get chest tightness and feel like I cannot breathe.\n[00:29] Doctor: Okay. Have you been using the box breathing techniques we discussed?\n[00:34] Patient: Yes, I use it when the chest tightness starts. It does help bring my pulse rate down, but the catastrophic thoughts about making mistakes still occur.\n[00:43] Doctor: Excellent work on applying the breathing exercises. We will keep Sertraline at 50mg and continue our weekly cognitive restructuring sessions.",
        "notes": "Patient reports significant decrease in baseline panic attacks on Sertraline 50mg + Pregabalin 75mg. GAD-7 decreased to 14/21. Autonomic tremor occurs transiently during public speaking."
    },
    {
        "id": "rx-3",
        "sessionType": "Crisis Consultation",
        "patientId": "pat-3",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-18",
        "diagnosis": "Bipolar II Disorder, Current Episode Depressed, Severe without Psychotic Features (ICD-11: 6A61.1 / ICD-10: F31.3)",
        "specifiers": "Recurrent hypomanic episodes \u00b7 Melancholic depressive crash \u00b7 Seasonal pattern \u00b7 High suicide risk",
        "vitals": {
            "bp": "122/80 mmHg",
            "pulse": "74 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "76 kg",
            "bmi": "24.2 kg/m\u00b2"
        },
        "chiefComplaint": "Post-hypomanic depressive crash \u00d7 4 weeks, hypersomnia (11 hrs/day), intense guilt over March startup investments, psychomotor retardation",
        "onset": "4 weeks ago following hypomanic spending phase",
        "duration": "4 weeks",
        "progression": "Sudden drop in energy, severe psychomotor slowing",
        "functionalImpact": "Unable to evaluate fund deals; withdrawn from partners",
        "triggers": "Circadian rhythm disruption, post-hypomanic neurochemical rebound",
        "hpiNarrative": "41-year-old venture capital partner presenting for mood stabilization follow-up. History of recurrent hypomanic episodes characterized by decreased need for sleep (3 hrs/night), pressured speech, grandiose deal evaluations, followed by severe depressive crashes.",
        "mse": {
            "appearance": [
                "Slightly disheveled",
                "tired posture"
            ],
            "behaviour": [
                "Marked psychomotor retardation"
            ],
            "speech": [
                "Low volume",
                "prolonged latency"
            ],
            "affect": [
                "Flat",
                "blunted",
                "depressed"
            ],
            "thoughtForm": [
                "Slowed processing",
                "goal-directed"
            ],
            "thoughtContent": [
                "Guilt over March deals",
                "worthlessness",
                "passive SI during crash"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Distractible",
                "slowed processing"
            ],
            "insight": [
                "Fair (Grade 4)"
            ],
            "judgment": [
                "Intact currently"
            ],
            "moodSubjective": "Crushed and guilty",
            "summary": "Depressed male with severe psychomotor retardation, post-hypomanic remorse, therapeutic lithium compliance, high passive suicide risk requiring active caregiver co-monitoring."
        },
        "medicines": [
            {
                "name": "Lithium Carbonate SR",
                "brand": "Lithosun SR 400",
                "strength": "400 mg",
                "dose": "400 mg",
                "route": "Oral",
                "freq": "Twice daily (1-0-1, 800mg/day)",
                "timing": "Morning & Night (1-0-1)",
                "duration": "12 weeks",
                "instructions": "Take after meals. Maintain consistent daily water (2.5-3L) and salt intake. Serum lithium level monitoring every 3 months (Target: 0.6\u20130.8 mEq/L).",
                "indication": "Bipolar Mood Stabilizer (Target 0.76 mEq/L)",
                "status": "Active"
            },
            {
                "name": "Olanzapine",
                "brand": "Oleanz 5",
                "strength": "5 mg",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "6 weeks",
                "instructions": "Take at bedtime for acute bipolar depressive crash. Monitor fasting blood glucose and lipid panel.",
                "indication": "Acute Bipolar Depressive Crash",
                "status": "Active"
            },
            {
                "name": "Atorvastatin",
                "brand": "Atorva 10",
                "strength": "10 mg",
                "dose": "10 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "Continuous",
                "instructions": "Take at bedtime for dyslipidemia.",
                "indication": "Hypercholesterolemia Management",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Interpersonal and Social Rhythm Therapy (IPSRT)",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "Social Rhythm Metric (SRM) zeitgeber stabilization, guilt processing, sleep anchoring",
            "homework": [
                "Maintain Social Rhythm Metric diary daily (target SRM score > 3.5)",
                "Fixed morning wake-up anchor at 7:30 AM regardless of sleep duration"
            ]
        },
        "labsOrdered": [
            "12-hour Trough Serum Lithium level (Therapeutic at 0.76 mEq/L)",
            "Renal Function Test & eGFR (98 mL/min Normal)",
            "Fasting Lipid Panel & Blood Sugar (Olanzapine metabolic monitoring)"
        ],
        "lifestyleAdvice": [
            "Maintain 2.5\u20133.0 liters of daily water intake to prevent Lithium toxicity",
            "Strictly avoid NSAID pain relievers (Ibuprofen, Diclofenac); use Paracetamol for headaches",
            "Strict avoidance of alcohol and stimulants during bipolar crash"
        ],
        "risk": {
            "suicide": "high",
            "suicidalIdeation": "passive",
            "selfHarm": "low",
            "violence": "low",
            "abuse": "none",
            "protect": [
                "Father Devendra acts as supportive co-monitor",
                "Therapeutic Lithium compliance (0.76 mEq/L)",
                "Regular Social Rhythm Metric (SRM) tracking",
                "High motivation for mood stability"
            ],
            "notes": "Elevated suicide risk during acute depressive crash. Father Devendra present and actively supervising medication compliance."
        },
        "emergencyPlan": "Contact father Devendra Malhotra (+91 98111 22333) or 24x7 Tele-MANAS (14416 / 1800 891 4416).",
        "followupDate": "2025-07-08",
        "followupInterval": 14,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Hello Vikram. It has been two weeks since our last check-in. How are you feeling today?\n[00:06] Patient: Honestly doctor, it is really tough. The high energy from March is completely gone. I can barely get out of bed in the morning, and the guilt over what I did during that high phase is crushing me.\n[00:19] Doctor: I hear you. Coming down from a hypomanic episode into a depressive phase is exhausting and disorienting. Have you been taking the Lithium consistently?\n[00:27] Patient: Yes, my father ensures I take the 400mg twice a day without missing. We got the blood test done, and the level was 0.76.\n[00:36] Doctor: That is an excellent therapeutic level. Because the depressive symptoms are severe right now, with PHQ-9 at 22, I want to add a low dose of Olanzapine at 5mg for the next few weeks to lift this crash. How is your sleep schedule?\n[00:50] Patient: I am sleeping almost 11 hours, but I wake up feeling completely drained. In IPSRT with Dr. Sneha, we are trying to fix my morning wake-up time to 7:30 AM.\n[01:00] Doctor: That consistency is crucial. We will monitor the Olanzapine response and review again next week.",
        "notes": "42-year-old male with Bipolar II Disorder presenting in melancholic depressive crash following March hypomania. 12-hour trough serum lithium level is therapeutic at 0.76 mEq/L. High suicide risk due to guilt and hopelessness. Father Devendra present and actively supervising."
    },
    {
        "id": "rx-4",
        "sessionType": "Therapy Session",
        "patientId": "pat-4",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-15",
        "diagnosis": "Alcohol Use Disorder, Moderate-Severe, in Early Remission (ICD-11: 6C40.1 / ICD-10: F10.20)",
        "specifiers": "Early remission (28 days abstinent) \u00b7 Evening craving cues prominent \u00b7 LFT recovering",
        "vitals": {
            "bp": "126/82 mmHg",
            "pulse": "78 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "72 kg",
            "bmi": "23.5 kg/m\u00b2"
        },
        "chiefComplaint": "Maintenance following outpatient alcohol detoxification; craving cues triggered at 7 PM post-work; 28 days completely abstinent",
        "onset": "Alcohol dependence \u00d7 7 years; acute detox 28 days ago",
        "duration": "28 days abstinent",
        "progression": "Tremors resolved; craving peak at 7:00 PM",
        "functionalImpact": "Client dinners require behavioral substitution strategy",
        "triggers": "End of workday transition, corporate social settings",
        "hpiNarrative": "46-year-old sales executive presenting for ongoing alcohol de-addiction maintenance. Chronic heavy alcohol consumption (180-240ml whisky daily x 8 years) with morning cravings and tremors. Currently 28 days abstinent on Naltrexone 50mg OD and weekly AA engagement.",
        "mse": {
            "appearance": [
                "Well-kempt",
                "alert"
            ],
            "behaviour": [
                "Calm",
                "cooperative"
            ],
            "speech": [
                "Clear",
                "normal cadence"
            ],
            "affect": [
                "Euthymic",
                "congruent"
            ],
            "thoughtForm": [
                "Goal-directed",
                "linear"
            ],
            "thoughtContent": [
                "Craving management",
                "zero suicidal ideation"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Alert",
                "oriented \u00d7 3"
            ],
            "insight": [
                "Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Determined but anxious in evenings",
            "summary": "Abstinent male in early alcohol remission, stable vital signs, recovering liver parameters, high treatment motivation and active spouse support."
        },
        "medicines": [
            {
                "name": "Naltrexone",
                "brand": "Naltima 50",
                "strength": "50 mg",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "instructions": "Take after breakfast. Opioid receptor antagonist to suppress alcohol craving pathways. Avoid opioid analgesics.",
                "indication": "Alcohol Dependence Craving Suppression",
                "status": "Active"
            },
            {
                "name": "Thiamine Hydrochloride (Vit B1)",
                "brand": "Thiamine 100",
                "strength": "100 mg",
                "dose": "100 mg",
                "route": "Oral",
                "freq": "Once daily, morning",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "instructions": "Take daily for neuroprotection and Wernicke-Korsakoff syndrome prevention.",
                "indication": "Neuroprotection & Wernicke Prevention",
                "status": "Active"
            },
            {
                "name": "B-Complex with Zinc",
                "brand": "Becozinc",
                "strength": "1 cap",
                "dose": "1 cap",
                "route": "Oral",
                "freq": "Once daily after lunch",
                "timing": "Afternoon (0-1-0)",
                "duration": "12 weeks",
                "instructions": "Nutritional replenishment.",
                "indication": "Nutritional Replenishment",
                "status": "Active"
            },
            {
                "name": "Nicotine Polacrilex Gum",
                "brand": "Nicotex 2mg",
                "strength": "2 mg",
                "dose": "2 mg",
                "route": "Oral (chew & park)",
                "freq": "SOS (max 6 gums/day)",
                "timing": "SOS (As needed)",
                "duration": "8 weeks",
                "instructions": "Chew slowly until peppery taste, then park between cheek and gum for tobacco reduction.",
                "indication": "Tobacco Harm Reduction",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Motivational Enhancement Therapy (MET) & Relapse Prevention",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "Urge surfing drills, drink refusal skills, evening routine restructuring",
            "homework": [
                "Practice urge surfing for 15 minutes when 7 PM craving strikes",
                "Mocktail substitution (sparkling water + lime) during business dinners"
            ]
        },
        "labsOrdered": [
            "Liver Function Test (LFT) \u2014 Repeat in 6 weeks (SGOT 48 U/L, SGPT 54 U/L improving)",
            "USG Abdomen (Grade 1 Steatosis / Fatty Liver)",
            "Complete Blood Count (CBC) & Platelets (Normal)"
        ],
        "lifestyleAdvice": [
            "Attend weekly AA fellowship meetings (Tuesdays & Saturdays at 7:30 PM)",
            "Zero alcohol storage at home; key to home bar surrendered to spouse Neha",
            "Evening 30-minute badminton/walk with Neha at 7 PM to break conditioned cues"
        ],
        "risk": {
            "suicide": "moderate",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Enrolled in AA weekly meetings",
                "Spouse Neha manages med lockbox",
                "Naltrexone 50mg compliance",
                "Urge surfing skills mastered"
            ],
            "notes": "Relapse risk during acute craving peaks. Medication lockbox managed by spouse Neha Verma (+91 98230 77889)."
        },
        "emergencyPlan": "Contact spouse Neha (+91 98230 77889) or National De-Addiction Helpline (1800-11-0031) / Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 21,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good afternoon Aditya. Congratulations on reaching day 18 of total abstinence. How are you and Neha feeling?\n[00:07] Patient: Thank you Doctor Sharma. The physical withdrawal is completely gone. I am sleeping better and my mind feels sharper. But the evening cravings around 7 PM when I finish client calls are very intense.\n[00:20] Doctor: That is completely expected. That 7 PM window has been conditioned in your brain for over six years. How is the Naltrexone working for you?\n[00:28] Patient: I take the 50mg every morning after breakfast. It definitely blunts the euphoria and obsession, but the habit of having a glass in my hand is hard to break.\n[00:39] Doctor: That is where behavioral substitution and urge surfing come in. In therapy with Dr. Sneha, have you practiced the mocktail substitution strategy during business dinners?\n[00:48] Patient: Yes, I order sparkling water with lime in a rock glass. It takes away the social awkwardness with clients without touching alcohol.\n[00:56] Doctor: That is an excellent strategy. Your liver enzymes are already trending down nicely. Let us keep this exact regimen going.",
        "notes": "Patient is 18 days completely abstinent following outpatient detox. Tolerating Naltrexone 50mg well with no nausea. LFT enzymes show significant recovery (SGOT down from 112 to 48 U/L, SGPT down from 98 to 54 U/L). PACS craving score 12/30. Neha reports calm home atmosphere."
    },
    {
        "id": "rx-5",
        "sessionType": "Regular Session",
        "patientId": "pat-5",
        "doctorName": "Dr. Vivek Anand",
        "date": "2025-06-10",
        "diagnosis": "Adult Attention-Deficit/Hyperactivity Disorder, Combined Presentation (ICD-11: 6A05.2 / ICD-10: F90.0)",
        "specifiers": "Inattentive & hyperactive-impulsive features \u00b7 Executive dysfunction \u00b7 Stabilized on MPH ER",
        "vitals": {
            "bp": "124/80 mmHg",
            "pulse": "82 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "64 kg",
            "bmi": "21.8 kg/m\u00b2"
        },
        "chiefComplaint": "Lifelong executive dysfunction, severe procrastination on software sprint deliverables, working memory lapses, and distractibility; stabilized on MPH ER 36mg",
        "onset": "Childhood onset (>7 years), unmasked by senior engineering workload",
        "duration": "Lifelong",
        "progression": "Significant improvement on psychostimulant therapy",
        "functionalImpact": "Executive focus extended to 8 hours daily; zero missed sprint deadlines",
        "triggers": "Unstructured open-ended tasks, multi-tasking contexts",
        "hpiNarrative": "26-year-old software engineer presenting with lifelong executive dysfunction, severe procrastination, working memory lapses, and distractibility. Academic and workplace impairment. Diagnosed with Adult ADHD (Inattentive type); stabilized on Methylphenidate ER 36mg.",
        "mse": {
            "appearance": [
                "Restless",
                "casual attire",
                "alert"
            ],
            "behaviour": [
                "Fidgety hands",
                "rapid eye movement"
            ],
            "speech": [
                "Fast cadence",
                "jumping topics",
                "articulate"
            ],
            "affect": [
                "Reactive",
                "mobile",
                "euthymic"
            ],
            "thoughtForm": [
                "Slightly tangential",
                "coherent"
            ],
            "thoughtContent": [
                "Sprint projects",
                "technology",
                "zero suicidal ideation"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Distractible off medication",
                "focused on stimulant"
            ],
            "insight": [
                "Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Energized and productive",
            "summary": "Young adult male with Adult ADHD, marked improvement in sustained attention and organizational throughput on Methylphenidate ER 36mg, normal vitals and ECG."
        },
        "medicines": [
            {
                "name": "Methylphenidate ER",
                "brand": "Inspiral SR 36",
                "strength": "36 mg",
                "dose": "36 mg",
                "route": "Oral",
                "freq": "Once daily, morning (after breakfast)",
                "timing": "Morning (1-0-0)",
                "duration": "6 weeks",
                "instructions": "Take immediately after morning breakfast. Schedule X regulated formulation. Do not take after 1:00 PM to avoid insomnia.",
                "indication": "Adult ADHD (Schedule X Stimulant)",
                "status": "Active"
            },
            {
                "name": "Melatonin PR",
                "brand": "Meloset 3mg",
                "strength": "3 mg",
                "dose": "3 mg",
                "route": "Oral",
                "freq": "Bedtime (1 hour before sleep)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "instructions": "Take at 10:30 PM for circadian phase shifting.",
                "indication": "Delayed Sleep Phase Chronobiotic",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "ADHD Executive Function Coaching",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "Kanban task breakdown, Pomodoro timer drills, external memory scaffolding",
            "homework": [
                "Maintain visual Kanban board on desktop for daily sprint tasks",
                "25/5 Pomodoro intervals with zero notification popups"
            ]
        },
        "labsOrdered": [
            "12-Lead ECG (Sinus Rhythm, HR 80 bpm, QTc 402 ms - Cleared)",
            "Thyroid Profile (TSH 1.8 mIU/L Normal)",
            "CBC & Platelets (Hb 15.1 g/dL Normal)"
        ],
        "lifestyleAdvice": [
            "Take Methylphenidate ER immediately after a heavy breakfast before 8:30 AM",
            "Daily 20-minute cardio exercise at 6 PM to dissipate restlessness",
            "Screen curfew at 11:00 PM with blue-light filter activated"
        ],
        "risk": {
            "suicide": "none",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Supportive brother Siddharth",
                "Structured Kanban workflow adoption",
                "Good response to Methylphenidate ER",
                "High technical problem-solving ability"
            ],
            "notes": "Zero suicidal ideation. Monitored for appetite suppression and pulse/BP stability."
        },
        "emergencyPlan": "Contact brother Siddharth Kapur (+91 98100 88776) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 28,
        "digitalSignature": "Dr. Vivek Anand (Reg MH-2017-3310)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good afternoon Rohan. How have the past two weeks been on Methylphenidate ER 36mg?\n[00:06] Patient: Doctor, it has honestly been life-changing. For the first time in my career, I can sit down and read a 40-page software documentation document without checking my phone every three minutes.\n[00:18] Doctor: That is fantastic to hear. How is your appetite and sleep?\n[00:23] Patient: My appetite dips slightly around 1 PM, but I make sure to eat a heavy breakfast before taking the pill. With Melatonin at night, I am falling asleep by 11:30 PM.\n[00:34] Doctor: Your vitals look great\u2014BP is 124/80 and pulse is 82 bpm. How are you progressing in ADHD coaching with Dr. Sneha?\n[00:43] Patient: We set up a visual Kanban board and Pomodoro timers. I haven't missed a single sprint deadline this past week.\n[00:52] Doctor: Excellent. We will maintain the 36mg dosage and continue the behavioral executive scaffolding.",
        "notes": "28yo software engineer on Methylphenidate ER 36mg. Excellent therapeutic response with 8-hour sustained executive focus. ASRS v1.1 Part A score decreased from 22 to 11. Blood pressure and heart rate within optimal normal limits (BP 124/80, HR 82 bpm)."
    },
    {
        "id": "rx-6",
        "sessionType": "Regular Session",
        "patientId": "pat-6",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-05",
        "diagnosis": "Recurrent Major Depressive Disorder, Current Episode Moderate with Somatic Features (ICD-11: 6A71.0 / ICD-10: F33.1)",
        "specifiers": "Recurrent episodes \u00b7 Diabetic neuropathic pain comorbidity \u00b7 Somatic exhaustion",
        "vitals": {
            "bp": "128/82 mmHg",
            "pulse": "74 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "66 kg",
            "bmi": "25.8 kg/m\u00b2"
        },
        "chiefComplaint": "Third major depressive episode with prominent fatigue, somatic exhaustion, fragmented sleep, and severe diabetic peripheral neuropathic burning in bilateral feet",
        "onset": "4 months ago with worsening diabetic neuropathy",
        "duration": "4 months",
        "progression": "Burning pain reducing on Pregabalin + Venlafaxine",
        "functionalImpact": "Difficulty standing for full 6-hour school teaching shifts",
        "triggers": "Chronic physical pain, diabetic burnout",
        "hpiNarrative": "52-year-old school vice-principal with recurrent MDD complicated by severe diabetic peripheral neuropathy. Persistent low mood, somatic exhaustion, fragmented sleep, and neuropathic burning pains in both feet. Dual response on Venlafaxine XR 75mg and Pregabalin 75mg.",
        "mse": {
            "appearance": [
                "Modest dress",
                "fatigued posture",
                "cooperative"
            ],
            "behaviour": [
                "Slow gait due to foot pain"
            ],
            "speech": [
                "Monotone",
                "sparse",
                "coherent"
            ],
            "affect": [
                "Flat",
                "restricted",
                "weary"
            ],
            "thoughtForm": [
                "Linear",
                "goal-directed"
            ],
            "thoughtContent": [
                "Guilt over taking leave",
                "passive somatic weariness without active SI"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Delayed response",
                "oriented \u00d7 3"
            ],
            "insight": [
                "Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Tired but improving",
            "summary": "Middle-aged educator with Recurrent MDD and diabetic neuropathy, good dual analgesic-antidepressant response, compliant with Metformin and Pregabalin."
        },
        "medicines": [
            {
                "name": "Venlafaxine ER",
                "brand": "Venlor XR 75",
                "strength": "75 mg",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Once daily, morning with breakfast",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "instructions": "Take with breakfast. Dual serotonin-norepinephrine reuptake inhibitor for depression and neuropathic pain.",
                "indication": "Depression & Diabetic Neuropathic Pain (SNRI)",
                "status": "Active"
            },
            {
                "name": "Metformin",
                "brand": "Glycomet 500",
                "strength": "500 mg",
                "dose": "500 mg",
                "route": "Oral",
                "freq": "Twice daily with meals (1-0-1)",
                "timing": "Morning & Night (1-0-1)",
                "duration": "Continuous",
                "instructions": "Continue for glycemic control.",
                "indication": "Type 2 Diabetes Mellitus",
                "status": "Active"
            },
            {
                "name": "Pregabalin",
                "brand": "Pregalin 75",
                "strength": "75 mg",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "instructions": "Take at bedtime for neuropathic leg pain.",
                "indication": "Diabetic Peripheral Neuropathy & Sleep",
                "status": "Active"
            },
            {
                "name": "Methylcobalamin + Alpha Lipoic Acid",
                "brand": "Nurokind-Plus",
                "strength": "1 cap",
                "dose": "1 cap",
                "route": "Oral",
                "freq": "Once daily after lunch",
                "timing": "Afternoon (0-1-0)",
                "duration": "12 weeks",
                "instructions": "Nerve health maintenance.",
                "indication": "Peripheral Nerve Health",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Supportive Psychotherapy & Pain Management",
            "therapist": "Dr. Shalini Mukhopadhyay",
            "frequency": "Fortnightly",
            "goals": "Activity pacing, cognitive appraisal of chronic illness, energy budgeting",
            "homework": [
                "Energy budgeting diary (take 10-min sitting break between school periods)",
                "Daily 15-minute gentle evening walk"
            ]
        },
        "labsOrdered": [
            "HbA1c (7.8% - Target < 7.0%, Diabetology coordination advised)",
            "Fasting Blood Sugar (138 mg/dL)",
            "Renal Function & eGFR (>90 mL/min Normal)"
        ],
        "lifestyleAdvice": [
            "Gentle 15-min evening stroll in comfortable orthotic footwear",
            "Diabetic diet adherence; avoid high glycemic evening snacks",
            "Daily evening foot inspection and moisturizing"
        ],
        "risk": {
            "suicide": "low-moderate",
            "suicidalIdeation": "passive",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Devoted spouse Rajesh & family support",
                "Pain management alliance with Diabetologist",
                "Active in school mentoring",
                "Religious and spiritual coping"
            ],
            "notes": "Low-moderate risk due to chronic pain exhaustion. Supportive family alliance."
        },
        "emergencyPlan": "Contact spouse Rajesh Gupta (+91 98300 22334) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 28,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good morning Neha. How have you been feeling on the Venlafaxine and Pregabalin?\n[00:06] Patient: Good morning Dr. Sharma. The burning sensation in my feet is much less severe at night, so I am able to sleep 6 to 7 hours now.\n[00:15] Doctor: That is a wonderful improvement. Sleep restoration makes a massive difference in depression recovery. How is your energy during school hours?\n[00:23] Patient: I still feel tired by 3 PM, but the overwhelming heavy feeling in my chest has lifted. In therapy, Dr. Shalini taught me energy pacing.\n[00:34] Doctor: Excellent. Your PHQ-9 score came down from 19 to 14 today. We will keep this exact medication combination and continue our supportive therapy sessions.",
        "notes": "45yo educator with Recurrent MDD and Type 2 Diabetes. Venlafaxine XR 75mg + Pregabalin 75mg providing significant dual relief. Burning dysesthesias reduced by 50%. Sleep uninterrupted. PHQ-9 dropped from 19 to 14."
    },
    {
        "id": "rx-7",
        "sessionType": "Regular Session",
        "patientId": "pat-7",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-14",
        "diagnosis": "Mild Cognitive Impairment, Amnestic Multi-Domain with Vascular Risk (ICD-11: 6D71 / ICD-10: F06.7)",
        "specifiers": "Amnestic subtype \u00b7 Slow progression \u00b7 High cognitive reserve \u00b7 Independent basic ADLs",
        "vitals": {
            "bp": "124/76 mmHg",
            "pulse": "68 bpm",
            "temp": "98.2 \u00b0F",
            "weight": "62 kg",
            "bmi": "22.4 kg/m\u00b2"
        },
        "chiefComplaint": "Insidious 14-month short-term memory decline, repetitive questions regarding calendar dates, stable ADLs, high cognitive reserve",
        "onset": "14 months ago insidious onset",
        "duration": "14 months",
        "progression": "Slow, stable on Donepezil 5mg",
        "functionalImpact": "Needs assistance with banking and unfamiliar transit routes; basic ADLs intact",
        "triggers": "Age-related neurodegeneration, microvascular changes",
        "hpiNarrative": "71-year-old retired accounts officer brought by surgeon son with 14-month insidious short-term memory decline, repetitive questioning, and mild spatial disorientation. MoCA score 22/30. Normal neurological exam. Stabilized on Donepezil 5mg OD with cognitive pacing.",
        "mse": {
            "appearance": [
                "Neat",
                "dignified",
                "cooperative"
            ],
            "behaviour": [
                "Calm",
                "polite"
            ],
            "speech": [
                "Hesitant",
                "mild word-finding pauses"
            ],
            "affect": [
                "Warm",
                "appropriate",
                "pleasant"
            ],
            "thoughtForm": [
                "Linear",
                "circumstantial at times"
            ],
            "thoughtContent": [
                "Reminiscing about career",
                "mild memory worry"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "MoCA 22/30 (delayed recall 1/5, orientation 5/6)"
            ],
            "insight": [
                "Fair (Grade 4)"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Content and calm",
            "summary": "Elderly gentleman with amnestic MCI, well preserved social graces, high cognitive reserve, excellent family care and memory scaffolding."
        },
        "medicines": [
            {
                "name": "Donepezil Hydrochloride",
                "brand": "Donecept 5",
                "strength": "5 mg",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime after dinner (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "12 weeks",
                "instructions": "Take at bedtime with water. Reversible acetylcholinesterase inhibitor for cognitive stabilization.",
                "indication": "Mild Cognitive Impairment (AChEI)",
                "status": "Active"
            },
            {
                "name": "Escitalopram",
                "brand": "Nexito 5",
                "strength": "5 mg",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "12 weeks",
                "instructions": "Low dose for cognitive anxiety and irritability.",
                "indication": "Cognitive Anxiety / Irritability",
                "status": "Active"
            },
            {
                "name": "Telmisartan",
                "brand": "Telma 40",
                "strength": "40 mg",
                "dose": "40 mg",
                "route": "Oral",
                "freq": "Once daily, morning (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "Continuous",
                "instructions": "Continue for vascular blood pressure control.",
                "indication": "Essential Hypertension",
                "status": "Active"
            },
            {
                "name": "Aspirin",
                "brand": "Ecosprin 75",
                "strength": "75 mg",
                "dose": "75 mg",
                "route": "Oral",
                "freq": "Once daily, after lunch (0-1-0)",
                "timing": "Afternoon (0-1-0)",
                "duration": "Continuous",
                "instructions": "Secondary vascular stroke prophylaxis.",
                "indication": "Antiplatelet / Stroke Prophylaxis",
                "status": "Active"
            },
            {
                "name": "Methylcobalamin (Vit B12)",
                "brand": "Neurobion Forte",
                "strength": "1500 mcg",
                "dose": "1500 mcg",
                "route": "Oral",
                "freq": "Once daily, morning",
                "timing": "Morning (1-0-0)",
                "duration": "12 weeks",
                "instructions": "Neurotrophic support.",
                "indication": "Neurotrophic Support",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Cognitive Stimulation & Caregiver Scaffolding",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Monthly",
            "goals": "Memory calendar maintenance, orientation routines, caregiver stress management",
            "homework": [
                "Review hallway whiteboard memory calendar every morning after coffee",
                "Solve 1 daily Sudoku puzzle and read The Hindu editorial"
            ]
        },
        "labsOrdered": [
            "3T Brain MRI (MTA Grade 1 hippocampal atrophy, Fazekas 1 leukoaraiosis)",
            "Serum B12 (440 pg/mL Normal)",
            "Homocysteine (12.4 mcmol/L Normal)"
        ],
        "lifestyleAdvice": [
            "Daily 30-minute morning walk in Nageswara Rao Park with son/helper",
            "Maintain dining room whiteboard memory calendar for all appointments",
            "Keep daily routine consistent and predictable"
        ],
        "risk": {
            "suicide": "none",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Surgeon son Dr. Anirudh manages care",
                "Daily memory whiteboard established",
                "Good response to Donepezil 5mg",
                "Stable home routine and walking habit"
            ],
            "notes": "Zero suicide risk. Low wandering risk. Son Dr. Anirudh manages all prescriptions."
        },
        "emergencyPlan": "Contact son Dr. Anirudh Kumar (+91 98400 11223) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 30,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Vanakkam Mr. Kishore Kumar. It is great to see you and Dr. Anirudh today. How has your routine been in Chennai?\n[00:07] Patient: Vanakkam Doctor. I am doing well. I go for my morning walk in Nageswara Rao Park every day. My son says I sometimes forget what happened yesterday, but I remember everything from my service in the Electricity Board.\n[00:21] Doctor: That is very common, Mr. Kumar. Long-term memories are very well preserved. Anirudh, how have the Donepezil 5mg and the memory strategies been working at home?\n[00:30] Caregiver: Doctor, the Donepezil caused no nausea at all. The whiteboard calendar in the dining room has been fantastic. He checks it every morning and writes down his tasks.\n[00:41] Doctor: That is wonderful. Environmental scaffolding combined with Donepezil helps preserve synaptic acetylcholine. MoCA score is stable at 22/30 today.",
        "notes": "68yo retired chief accounts officer presenting with amnestic multi-domain MCI. MoCA 22/30. MRI brain shows mild hippocampal atrophy and lacunar white matter changes. Donepezil 5mg well-tolerated with zero cholinergic adverse effects. High cognitive reserve and excellent family care."
    },
    {
        "id": "rx-8",
        "sessionType": "Therapy Session",
        "patientId": "pat-8",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-18",
        "diagnosis": "Obsessive-Compulsive Disorder, Predominantly Contamination Obsessions (ICD-11: 6B20 / ICD-10: F42.0)",
        "specifiers": "Contamination obsessions \u00b7 Compulsive hand washing \u00b7 Bilateral hand dermatitis \u00b7 ERP in progress",
        "vitals": {
            "bp": "114/72 mmHg",
            "pulse": "70 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "50 kg",
            "bmi": "19.5 kg/m\u00b2"
        },
        "chiefComplaint": "Contamination obsessions and compulsive hand washing (25-30x/day, 4 mins each); severe bilateral hand dermatitis; Y-BOCS score reduced from 28 to 19 on Fluoxetine 60mg + ERP",
        "onset": "18 months ago, exacerbated during design agency deadlines",
        "duration": "18 months",
        "progression": "Y-BOCS dropped from 28 to 19 on high dose SSRI + ERP",
        "functionalImpact": "Hand dermatitis healed; able to work on design keyboard without gloves",
        "triggers": "Public door handles, shared cutlery, elevator buttons",
        "hpiNarrative": "24-year-old UX designer presenting with contamination obsessions and compulsive hand washing (25-30 times daily x 4-5 mins each). Severe bilateral hand dermatitis and excoriation. Y-BOCS score 26/40. Commenced on Fluoxetine 60mg and Exposure & Response Prevention (ERP).",
        "mse": {
            "appearance": [
                "Meticulous hygiene",
                "anxious",
                "healed hands"
            ],
            "behaviour": [
                "Controlled movements"
            ],
            "speech": [
                "Precise",
                "controlled"
            ],
            "affect": [
                "Tense",
                "euthymic baseline"
            ],
            "thoughtForm": [
                "Linear",
                "obsessional themes"
            ],
            "thoughtContent": [
                "Contamination fears (egodystonic)",
                "zero suicidal ideation"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Hyperfocused",
                "alert"
            ],
            "insight": [
                "Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Relieved that hands are healing",
            "summary": "Young adult designer with contamination OCD, excellent response to Fluoxetine 60mg and in-vivo ERP, hand dermatitis resolved, parental accommodation ceased."
        },
        "medicines": [
            {
                "name": "Fluoxetine",
                "brand": "Prodep 60",
                "strength": "60 mg",
                "dose": "60 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "8 weeks",
                "instructions": "Take after breakfast. Anti-obsessional titration target dose. Monitor QTc interval annually.",
                "indication": "Obsessive-Compulsive Disorder (High-Dose SSRI)",
                "status": "Active"
            },
            {
                "name": "Liquid Paraffin Emollient Cream",
                "brand": "Venusia Max",
                "strength": "Apply liberally",
                "dose": "Apply liberally",
                "route": "Topical",
                "freq": "After every hand wash & bedtime",
                "timing": "Topical (As needed)",
                "duration": "Continuous",
                "instructions": "Skin barrier restoration for hand dermatitis.",
                "indication": "Hand Dermatitis Barrier Repair",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Exposure and Response Prevention (ERP)",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "In-vivo contamination exposures with 45-min response delay, stopping family accommodation",
            "homework": [
                "Step 5 on ERP hierarchy: touch clinic door handles without washing for 45 minutes",
                "Limit hand wash time to 30 seconds strictly using timer"
            ]
        },
        "labsOrdered": [
            "12-Lead ECG (Normal Sinus Rhythm, HR 70 bpm, QTc 414 ms - Cleared on Fluoxetine 60mg)",
            "Serum 25-OH Vitamin D (24 ng/mL - Insufficient)",
            "CBC & Platelets (Normal)"
        ],
        "lifestyleAdvice": [
            "Hand washing rule: maximum 30 seconds with plain water",
            "Apply Venusia Max barrier emollient immediately after drying",
            "Stop asking parents for contamination reassurance"
        ],
        "risk": {
            "suicide": "none",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Mother Lalitha actively stopping accommodation",
                "High motivation for ERP therapy",
                "Fluoxetine 60mg compliance",
                "Creative outlet in UI/UX design"
            ],
            "notes": "Low suicide risk. Severe prior skin excoriation from washing, now fully healed."
        },
        "emergencyPlan": "Contact mother Lalitha Iyer (+91 98450 66778) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 21,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good afternoon Sanjana. How have you been feeling since we increased Fluoxetine to 60mg?\n[00:06] Patient: Hello Dr. Sharma. The intrusive thoughts about germs are still there, but they don't feel as deafening. I can pause before rushing to the sink.\n[00:16] Doctor: That is a massive breakthrough. How are your bilateral hands healing?\n[00:21] Patient: The erythema and bleeding cracks have almost completely healed because I am using the emollient and only washing for 30 seconds instead of 4 minutes.\n[00:31] Doctor: That is wonderful news. How was your in-vivo exposure session with Dr. Sneha last week?\n[00:37] Patient: We practiced touching the door handles at the clinic and waiting 45 minutes before washing. My SUDs anxiety peaked at 8/10, but it dropped to 3/10 on its own without washing!\n[00:48] Doctor: That is the gold-standard ERP extinction curve. Your Y-BOCS score dropped from 28 to 19 today. We will keep Fluoxetine at 60mg and push further on the hierarchy.",
        "notes": "24yo UI/UX designer with Contamination OCD. On Fluoxetine 60mg OD + weekly ERP. Handwashing reduced from 35x to 12x/day. Hand skin fissures fully epithelialized. Y-BOCS score 19/40 (32% reduction). Excellent insight."
    },
    {
        "id": "rx-9",
        "sessionType": "Therapy Session",
        "patientId": "pat-9",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-10",
        "diagnosis": "Chronic Insomnia Disorder with Conditioned Sleep Arousal (ICD-11: 7A00 / ICD-10: F51.0 / G47.00)",
        "specifiers": "Psychophysiological insomnia \u00b7 Sleep maintenance difficulty \u00b7 Zolpidem discontinued (18d)",
        "vitals": {
            "bp": "120/78 mmHg",
            "pulse": "72 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "74 kg",
            "bmi": "23.9 kg/m\u00b2"
        },
        "chiefComplaint": "6-month chronic psychophysiological insomnia; total sleep time previously <4.5 hours with conditioned bedroom anticipatory anxiety; abstinent from Zolpidem \u00d7 18 days on CBT-I sleep restriction",
        "onset": "6 months ago during High Court corporate arbitration trial",
        "duration": "6 months",
        "progression": "Sleep efficiency increased to 86.1% on CBT-I",
        "functionalImpact": "Cognitive clarity restored for court litigation hearings",
        "triggers": "Late night legal brief reviews in bedroom, clock watching",
        "hpiNarrative": "31-year-old corporate litigation attorney presenting with 6-month chronic onset and sleep maintenance insomnia. Total sleep time < 4.5 hours with conditioned sleep anticipatory anxiety. Successfully discontinued Zolpidem dependency; stabilized on CBT-I and Melatonin PR 3mg.",
        "mse": {
            "appearance": [
                "Well-dressed",
                "alert",
                "professional"
            ],
            "behaviour": [
                "Composed",
                "cooperative"
            ],
            "speech": [
                "Normal rate",
                "articulate"
            ],
            "affect": [
                "Euthymic",
                "congruent"
            ],
            "thoughtForm": [
                "Goal-directed",
                "structured"
            ],
            "thoughtContent": [
                "Litigation deadlines",
                "zero suicidal thoughts"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Alert",
                "oriented \u00d7 3"
            ],
            "insight": [
                "Good (Grade 6) \u2713"
            ],
            "judgment": [
                "Intact \u2713"
            ],
            "moodSubjective": "Much more optimistic about sleep",
            "summary": "Litigation lawyer with chronic insomnia, successful Zolpidem withdrawal, high compliance with CBT-I sleep restriction window, sleep efficiency 86.1%."
        },
        "medicines": [
            {
                "name": "Melatonin PR",
                "brand": "Meloset 3mg",
                "strength": "3 mg",
                "dose": "3 mg",
                "route": "Oral",
                "freq": "Once daily, night (30 mins before sleep)",
                "timing": "Night (0-0-1)",
                "duration": "4 weeks",
                "instructions": "Take at 11:30 PM. Non-habit-forming circadian chronobiotic.",
                "indication": "Circadian Sleep Chronobiotic",
                "status": "Active"
            },
            {
                "name": "Magnesium Glycinate",
                "brand": "Magnesium Glycinate",
                "strength": "250 mg",
                "dose": "250 mg",
                "route": "Oral",
                "freq": "Bedtime (0-0-1)",
                "timing": "Bedtime (0-0-1)",
                "duration": "8 weeks",
                "instructions": "Take with water at bedtime for somatic muscle relaxation.",
                "indication": "Somatic Relaxation & GABA Modulation",
                "status": "Active"
            },
            {
                "name": "Zolpidem Tartrate",
                "brand": "Nitrest 5",
                "strength": "5 mg",
                "dose": "5 mg",
                "route": "Oral",
                "freq": "SOS only (locked emergency rescue, max 1/week)",
                "timing": "SOS (Emergency)",
                "duration": "4 weeks (taper)",
                "instructions": "Strict emergency rescue only if awake > 45 mins after stimulus control. Currently abstinent \u00d7 18 days.",
                "indication": "Insomnia Emergency Rescue (Locked)",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
            "therapist": "Dr. Sneha Patil (Clinical Psychologist)",
            "frequency": "Weekly",
            "goals": "Sleep restriction therapy (expanded window 11:45 PM to 6:00 AM, SE 86.1%), stimulus control",
            "homework": [
                "Strict 20-minute bed exit rule (leave bedroom if awake > 20 mins)",
                "Maintain daily Sleep Diary (record sleep latency & wake after sleep onset)"
            ]
        },
        "labsOrdered": [
            "Serum Ferritin (145 ng/mL - Restless Legs Syndrome ruled out)",
            "Thyroid Profile (TSH 1.9 mIU/L Normal)",
            "12-Lead ECG (QTc 406 ms Normal)"
        ],
        "lifestyleAdvice": [
            "Strict bedroom laptop and phone ban after 10:30 PM",
            "Turn all bedroom clock faces away from line of sight",
            "Maintain 6:00 AM fixed morning wake-up time 7 days a week"
        ],
        "risk": {
            "suicide": "none",
            "suicidalIdeation": "none",
            "selfHarm": "none",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Sleep hygiene and CBT-I adherence",
                "Supportive father Harpreet Gill",
                "Full withdrawal from Zolpidem achieved",
                "Structured litigation caseload boundaries"
            ],
            "notes": "Low clinical risk. Zero suicidal ideation. High motivation."
        },
        "emergencyPlan": "Contact father Harpreet Gill (+91 98140 33221) or Tele-MANAS (14416).",
        "followupDate": "2025-07-08",
        "followupInterval": 28,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Good evening Gaurav. How has your sleep diary been looking over the past three weeks?\n[00:06] Patient: Good evening Doctor Sharma. CBT-I with Dr. Sneha was tough for the first four days because of the 6-hour sleep restriction window (12:00 AM to 6:00 AM). But now I fall asleep within 15 minutes of hitting the pillow!\n[00:20] Doctor: That is the exact mechanism of sleep restriction therapy\u2014it builds intense homeostatic sleep pressure to eliminate bed-hyperarousal. Have you needed any Zolpidem?\n[00:29] Patient: Not a single tablet in the last 18 days. I turned my bedside clock away so I cannot see the time, and I stopped taking my laptop into the bedroom.\n[00:39] Doctor: Outstanding discipline. Your Insomnia Severity Index dropped from 22 to 12 today. Because your sleep efficiency is above 85%, we can now expand your sleep window by 15 minutes (11:45 PM to 6:00 AM).",
        "notes": "31yo advocate with chronic psychophysiological insomnia. 3-week trial of CBT-I sleep restriction + Melatonin PR 3mg. Sleep Efficiency increased from 56% to 86.1%. Zero Zolpidem use in 18 days. ISI dropped from 22 to 12."
    },
    {
        "id": "rx-10",
        "sessionType": "Therapy Session",
        "patientId": "pat-10",
        "doctorName": "Dr. Riya Sharma",
        "date": "2025-06-18",
        "diagnosis": "Emotionally Unstable Personality Disorder, Borderline Type (ICD-11: 6D11 / ICD-10: F60.3)",
        "specifiers": "Affective instability \u00b7 Fear of abandonment \u00b7 Zero NSSI in 4 months on DBT",
        "vitals": {
            "bp": "112/70 mmHg",
            "pulse": "76 bpm",
            "temp": "98.4 \u00b0F",
            "weight": "52 kg",
            "bmi": "20.3 kg/m\u00b2"
        },
        "chiefComplaint": "Severe affective instability, fear of rejection/abandonment, chronic emptiness, history of superficial forearm NSSI; zero NSSI in 4 months on Lamotrigine 50mg + DBT skills",
        "onset": "Adolescence (>16 years), exacerbated by university thesis pressure",
        "duration": "Chronic",
        "progression": "BSL-23 score improved from 2.8 to 1.9 on DBT coaching",
        "functionalImpact": "Able to complete postgraduate thesis chapters; improved peer relationships",
        "triggers": "Perceived interpersonal rejection or delayed messages from peers",
        "hpiNarrative": "22-year-old postgraduate literature student presenting with severe affective instability, chronic feelings of emptiness, intense fear of abandonment, and interpersonal conflict. History of non-suicidal self-injury (forearm cutting). In active DBT coaching with zero NSSI in 4 months.",
        "mse": {
            "appearance": [
                "Expressive clothing style",
                "cooperative"
            ],
            "behaviour": [
                "Engaged",
                "expressive gestures"
            ],
            "speech": [
                "Loud",
                "expressive",
                "fluent"
            ],
            "affect": [
                "Reactive",
                "mobile",
                "intense"
            ],
            "thoughtForm": [
                "Goal-directed",
                "linear"
            ],
            "thoughtContent": [
                "Interpersonal sensitivity",
                "fear of abandonment",
                "zero active suicidal intent"
            ],
            "perception": [
                "No hallucinations"
            ],
            "cognition": [
                "Alert",
                "oriented \u00d7 3"
            ],
            "insight": [
                "Fair-to-Good (Grade 5) \u2713"
            ],
            "judgment": [
                "Impulsive when dysregulated, improving"
            ],
            "moodSubjective": "More balanced, fewer extreme waves",
            "summary": "Young adult graduate student with Emotionally Unstable Personality Disorder, in active DBT coaching, well-tolerated Lamotrigine 50mg, zero NSSI for 4 months."
        },
        "medicines": [
            {
                "name": "Lamotrigine",
                "brand": "Lamitor 50",
                "strength": "50 mg",
                "dose": "50 mg",
                "route": "Oral",
                "freq": "Once daily, morning after breakfast (1-0-0)",
                "timing": "Morning (1-0-0)",
                "duration": "6 weeks",
                "instructions": "Take after breakfast. Titrated slowly for affective stabilization and impulsivity reduction. Report any skin rash immediately.",
                "indication": "Affective Instability / Mood Stabilization",
                "status": "Active"
            },
            {
                "name": "Quetiapine",
                "brand": "Qutan 25",
                "strength": "25 mg",
                "dose": "25 mg",
                "route": "Oral",
                "freq": "SOS at bedtime during severe crisis",
                "timing": "SOS (Bedtime)",
                "duration": "4 weeks",
                "instructions": "Take max 1 tablet/day during severe emotional overwhelm after attempting DBT TIPP skills first.",
                "indication": "Acute Emotional Crisis SOS",
                "status": "Active"
            }
        ],
        "therapy": {
            "modality": "Dialectical Behavior Therapy (DBT)",
            "therapist": "Dr. Shalini Mukhopadhyay",
            "frequency": "Weekly",
            "goals": "TIPP mammalian dive reflex skills, distress tolerance, daily Diary Card tracking",
            "homework": [
                "Daily DBT Diary Card tracking emotional urges 0-10",
                "Ice pack facial immersion (TIPP skill) for 30s when distress exceeds 7/10"
            ]
        },
        "labsOrdered": [
            "Dermatological Skin Inspection (Zero Stevens-Johnson rash on Lamotrigine 50mg)",
            "Liver and Renal Function Tests (Normal)",
            "Urine Toxicology Screen (Negative)"
        ],
        "lifestyleAdvice": [
            "Keep 2 ice gel packs in hostel freezer for immediate TIPP distress tolerance",
            "Maintain regular sleep-wake schedule (11:00 PM to 7:30 AM)",
            "Call sister Yasmin or DBT coach before any self-harm urges"
        ],
        "risk": {
            "suicide": "moderate",
            "suicidalIdeation": "passive",
            "selfHarm": "low",
            "violence": "none",
            "abuse": "none",
            "protect": [
                "Active DBT skills coaching contract",
                "Sister Yasmin available 24/7",
                "Mastered TIPP ice pack distress tolerance",
                "Committed to zero NSSI agreement"
            ],
            "notes": "Moderate longitudinal risk, low acute risk. Active DBT safety contract in place. Sister Yasmin available on speed dial."
        },
        "emergencyPlan": "Contact sister Yasmin Khan (+91 98480 99001) or Tele-MANAS (14416) / iCall (9152987821) / Vandrevala (9999 666 555).",
        "followupDate": "2025-07-08",
        "followupInterval": 14,
        "digitalSignature": "Dr. Riya Sharma (Reg MH-2019-4521)",
        "hasRecording": true,
        "recordingTranscript": "[00:01] Doctor: Hello Zoya. It is wonderful to see you today. How have your DBT skills coaching sessions with Dr. Shalini been going?\n[00:08] Patient: Hello Dr. Sharma. It has been a challenging week with my literature thesis supervisor, but for the first time, I didn't spiral into self-harm or impulsive shouting.\n[00:20] Doctor: That is tremendous emotional growth. What specific skill did you use when the urge arose?\n[00:27] Patient: When I got back to the hostel, my chest felt like it was on fire. I took an ice pack from the communal fridge and held it over my eyes and cheeks for 30 seconds\u2014the TIPP skill. My heart rate dropped immediately, and I wrote in my diary card instead.\n[00:43] Doctor: That is textbook application of the mammalian dive reflex to de-escalate amygdala hyperarousal. How is the Lamotrigine 50mg feeling?\n[00:52] Patient: No rash at all, and I feel like the baseline emotional waves don't crash over my head as violently anymore.\n[01:00] Doctor: Your BSL-23 score came down from 2.8 to 1.9 today. We will keep Lamotrigine at 50mg and continue weekly DBT skills training.",
        "notes": "22yo literature graduate student with Borderline Personality Disorder. Lamotrigine 50mg OD well-tolerated with zero dermatological rash. Highly engaged in DBT skills coaching with Dr. Shalini. Successfully executed TIPP ice pack skill during acute distress. Zero NSSI acts in 4 months. BSL-23 score 1.9/4.0."
    }
],

  notifications: [
    { id: "notif-1", patientId: "pat-1", title: "Clinical Scale Assessment Reminder", text: "🚨 Clinical Nudge: Dr. Riya Sharma has requested you to complete your pending PHQ-9 questionnaire before your consultation.", time: "Today, 09:05 AM", read: false, type: "nudge", actionUrl: "assessments", actionLabel: "Complete Questionnaire →" },
    { id: "notif-2", patientId: "pat-1", title: "Prescription Updated", text: "New prescription available. Escitalopram 10mg and Clonazepam 0.5mg added.", time: "Today, 09:00 AM", read: false, type: "prescription", actionUrl: "prescriptions", actionLabel: "View Prescription →" },
    { id: "notif-3", patientId: "pat-1", title: "Appointment Confirmed", text: "Appointment confirmed — Dr. Riya Sharma on 1 July 2025 at 10:00 AM.", time: "Today, 08:58 AM", read: true, type: "appointment", actionUrl: "appointments", actionLabel: "View Appointment →" }
  ],

  queue: [
    { id: "q-1", token: "T01", patientId: "pat-1", apptType: "New Consultation", time: "09:00 AM", assessmentStatus: "Done", status: "Waiting", date: "2025-06-24" },
    { id: "q-2", token: "T02", patientId: "pat-2", apptType: "Follow-up", time: "09:30 AM", assessmentStatus: "Done", status: "Waiting", date: "2025-06-24" },
    { id: "q-3", token: "T03", patientId: "pat-3", apptType: "Follow-up", time: "10:00 AM", assessmentStatus: "Done", status: "Waiting", date: "2025-06-24" },
    { id: "q-4", token: "T04", patientId: "pat-4", apptType: "New Consultation", time: "10:30 AM", assessmentStatus: "Done", status: "Completed", date: "2025-06-24" },
    { id: "q-5", token: "T05", patientId: "pat-5", apptType: "Follow-up", time: "11:00 AM", assessmentStatus: "None", status: "Scheduled", date: "2025-06-24" },
    { id: "q-6", token: "T06", patientId: "pat-6", apptType: "Follow-up", time: "11:30 AM", assessmentStatus: "Done", status: "Completed", date: "2025-06-24" },
    { id: "q-7", token: "T07", patientId: "pat-7", apptType: "Follow-up", time: "12:00 PM", assessmentStatus: "None", status: "Scheduled", date: "2025-06-24" },
    { id: "q-8", token: "T08", patientId: "pat-8", apptType: "Follow-up", time: "12:30 PM", assessmentStatus: "None", status: "No Show", date: "2025-06-24" },
    { id: "q-9", token: "T09", patientId: "pat-9", apptType: "Follow-up", time: "01:00 PM", assessmentStatus: "Done", status: "Scheduled", date: "2025-06-24" },
    { id: "q-10", token: "T10", patientId: "pat-10", apptType: "Follow-up", time: "01:30 PM", assessmentStatus: "Done", status: "Scheduled", date: "2025-06-24" }
  ],

  invoices: [
    {
      id: "inv-1",
      invoiceNumber: "INV-2025-001",
      patientId: "pat-4",
      patientName: "Aditya Verma",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (New)", qty: 1, unitPrice: 1200 }
      ],
      subtotal: 1200,
      tax: 0,
      discount: 0,
      total: 1200,
      amountPaid: 1200,
      status: "Paid",
      paymentMethod: "UPI",
      paymentDate: "2025-06-24 10:55 AM",
      notes: "First time consultation fee collected"
    },
    {
      id: "inv-2",
      invoiceNumber: "INV-2025-002",
      patientId: "pat-6",
      patientName: "Neha Gupta",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 1000,
      status: "Paid",
      paymentMethod: "Cash",
      paymentDate: "2025-06-24 11:45 AM",
      notes: "Follow-up consultation fee collected"
    },
    {
      id: "inv-3",
      invoiceNumber: "INV-2025-003",
      patientId: "pat-1",
      patientName: "Advait Rao",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 0,
      status: "Unpaid",
      paymentMethod: "",
      paymentDate: "",
      notes: "Consultation complete. Payment pending."
    },
    {
      id: "inv-4",
      invoiceNumber: "INV-2025-004",
      patientId: "pat-2",
      patientName: "Dr. Anjali Deshmukh",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 0,
      status: "Unpaid",
      paymentMethod: "",
      paymentDate: "",
      notes: "Consultation complete. Payment pending."
    }
  ],

  draftEncounters: {},
  labOrders: [
    { id: "lab-101", patientId: "pat-1", testName: "Complete Blood Count (CBC) with Differential", loincCode: "58410-2", priority: "Routine", status: "Completed", orderedBy: "Dr. Riya Sharma", orderDate: "2025-06-10", results: "Normal (Hb: 14.2 g/dL, WBC: 6,800/mcL, Platelets: 240,000/mcL)" },
    { id: "lab-102", patientId: "pat-1", testName: "Thyroid Profile (TSH, FT4, Total T3)", loincCode: "95241-6", priority: "Routine", status: "Completed", orderedBy: "Dr. Riya Sharma", orderDate: "2025-06-10", results: "Subclinical (TSH: 4.8 mIU/L, FT4: 1.1 ng/dL - Managed on Thyroxine 25mcg)" },
    { id: "lab-103", patientId: "pat-3", testName: "Serum Lithium Level (12h post-dose)", loincCode: "14334-7", priority: "Urgent", status: "Completed", orderedBy: "Dr. Riya Sharma", orderDate: "2025-06-20", results: "0.78 mEq/L (Therapeutic Range: 0.60 - 0.80 mEq/L)" }
  ],
  activeConsultation: null,
  auditLogs: [],
  ndpsAuditLogs: []
};

// --- STATE MANAGER ---
class StateManager {
  constructor() {
    this.key = "saronil_state_v28";
    this.state = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(this.key);
    let parsed = null;
    if (saved) {
      try {
        parsed = JSON.parse(saved);
        if (!(parsed.patients && parsed.patients.length >= 10 && parsed.queue && parsed.queue.some(q => q.status === 'Scheduled'))) {
          parsed = null;
        }
        if (parsed && parsed.patients && parsed.patients.some(p => p.name === 'Meera Nair' || p.name === 'Arjun Mehta')) {
          parsed = null;
        }
        if (parsed && (!parsed.patients.some(p => p.timeline && p.timeline.some(t => t.recordingTranscript)) || !parsed.prescriptions || parsed.prescriptions.length < 20)) {
          parsed = null;
        }
      } catch (e) {
        console.error("Error parsing saved state, resetting...", e);
      }
    }
    // State migration: ensure all patient timeline events have time
    if (parsed && parsed.patients) {
      parsed.patients.forEach(p => {
        if (p.timeline) {
          const defaultTimes = ["09:30 AM", "10:15 AM", "11:00 AM", "02:30 PM", "04:00 PM"];
          p.timeline.forEach((t, idx) => {
            if (!t.time) {
              t.time = defaultTimes[idx % defaultTimes.length];
            }
          });
        }
      });
    }


    if (!parsed) {
      parsed = JSON.parse(JSON.stringify(INITIAL_STATE));
      parsed.patients.forEach(p => {
        if (p.id === 'pat-1') p.riskTier = "Low-moderate risk";
        else if (p.id === 'pat-3') p.riskTier = "High risk";
        else if (p.id === 'pat-10') p.riskTier = "Moderate risk";
        else p.riskTier = "Low risk";
      });
    }

    // Shift mock dates dynamically so "Today" is always aligned to real calendar date
    const actualToday = new Date();
    actualToday.setHours(12, 0, 0, 0);
    const actualTodayStr = actualToday.toISOString().split('T')[0];

    // Determine current anchor date of the dataset
    let currentAnchorStr = parsed.systemAnchorDate;
    if (!currentAnchorStr) {
      const refItem = (parsed.queue && parsed.queue.find(q => q.id === 'q-2' || q.id === 'q-1')) ||
                      (parsed.appointments && parsed.appointments.find(a => a.id === 'appt-2'));
      if (refItem && refItem.date) {
        currentAnchorStr = refItem.date.split(' ')[0];
      } else {
        currentAnchorStr = "2025-06-24";
      }
    }

    const anchorDate = new Date(currentAnchorStr);
    anchorDate.setHours(12, 0, 0, 0);

    if (!isNaN(anchorDate.getTime())) {
      const offsetMs = actualToday.getTime() - anchorDate.getTime();
      const offsetDays = Math.round(offsetMs / (1000 * 60 * 60 * 24));

      if (offsetDays !== 0) {
        const shiftDates = (obj) => {
          if (!obj || typeof obj !== 'object') return;
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (key === 'dob') continue;
              const val = obj[key];
              if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}/.test(val)) {
                const parts = val.split(' ');
                const datePart = parts[0];
                const timePart = parts.slice(1).join(' ');
                const dateObj = new Date(datePart);
                if (!isNaN(dateObj.getTime())) {
                  dateObj.setDate(dateObj.getDate() + offsetDays);
                  const newDatePart = dateObj.toISOString().split('T')[0];
                  obj[key] = timePart ? `${newDatePart} ${timePart}` : newDatePart;
                }
              } else if (typeof val === 'object') {
                shiftDates(val);
              }
            }
          }
        };
        shiftDates(parsed);
      }
    }
    parsed.systemAnchorDate = actualTodayStr;

    // Ensure all standard migrations (e.g. invoices, auditLogs) are present
    let modified = false;
    if (!parsed.invoices) {
      parsed.invoices = JSON.parse(JSON.stringify(INITIAL_STATE.invoices));
      modified = true;
    }
    if (!parsed.auditLogs) {
      parsed.auditLogs = [];
      modified = true;
    }
    if (!parsed.ndpsAuditLogs) {
      parsed.ndpsAuditLogs = [];
      modified = true;
    }
    if (parsed.patients) {
      parsed.patients.forEach(p => {
        if (!p.riskTier) {
          if (p.id === 'pat-1') p.riskTier = "Low-moderate risk";
          else if (p.id === 'pat-3') p.riskTier = "High risk";
          else if (p.id === 'pat-10') p.riskTier = "Moderate risk";
          else p.riskTier = "Low risk";
          modified = true;
        }
      });
    }
    if (parsed.queue) {
      parsed.queue.forEach(q => {
        if (/^q-(10|[1-9])$/.test(q.id) || !q.date) {
          q.date = actualTodayStr;
          modified = true;
        }
      });
    }
    if (parsed.appointments) {
      const todayPlus = (days) => {
        const d = new Date(actualToday);
        d.setDate(d.getDate() + days);
        return d.toISOString().split('T')[0];
      };
      parsed.appointments.forEach(a => {
        if (/^appt-(10|[1-9])$/.test(a.id)) {
          a.date = actualTodayStr;
          modified = true;
        } else if (a.id === 'appt-11') {
          a.date = todayPlus(7);
          modified = true;
        } else if (a.id === 'appt-12') {
          a.date = todayPlus(3);
          modified = true;
        } else if (a.id === 'appt-13') {
          a.date = todayPlus(5);
          modified = true;
        }
      });
      if (!parsed.appointments.some(a => a.id === 'appt-11')) {
        parsed.appointments.push({
          id: "appt-11",
          patientId: "pat-1",
          doctorId: "doc-1",
          doctorName: "Dr. Riya Sharma",
          date: todayPlus(7),
          time: "10:00 AM",
          type: "Supportive Psychotherapy",
          mode: "In-person",
          fee: 1000,
          status: "Confirmed"
        });
        modified = true;
      }
      if (!parsed.appointments.some(a => a.id === 'appt-12')) {
        parsed.appointments.push({
          id: "appt-12",
          patientId: "pat-3",
          doctorId: "doc-1",
          doctorName: "Dr. Riya Sharma",
          date: todayPlus(3),
          time: "11:30 AM",
          type: "Follow-up Consultation",
          mode: "In-person",
          fee: 1000,
          status: "Confirmed"
        });
        modified = true;
      }
      if (!parsed.appointments.some(a => a.id === 'appt-13')) {
        parsed.appointments.push({
          id: "appt-13",
          patientId: "pat-7",
          doctorId: "doc-1",
          doctorName: "Dr. Riya Sharma",
          date: todayPlus(5),
          time: "02:00 PM",
          type: "Medication Review",
          mode: "Teleconsultation",
          fee: 1000,
          status: "Confirmed"
        });
        modified = true;
      }
    }

    this.saveState(parsed);
    return parsed;
  }

  saveState(state) {
    localStorage.setItem(this.key, JSON.stringify(state || this.state));
  }

  update(fn) {
    fn(this.state);
    this.saveState();
    this.dispatchUpdate();
  }

  updateSilent(fn) {
    fn(this.state);
    this.saveState();
  }

  reset() {
    localStorage.removeItem(this.key);
    this.state = this.loadState();
    this.saveState();
    this.dispatchUpdate();
  }

  dispatchUpdate() {
    window.dispatchEvent(new Event("stateUpdated"));
  }
}

const store = new StateManager();

// --- ASSESSMENT INSTRUMENT SPECS ---
const ASSESSMENT_SPECS = {
  "PHQ-9": {
    title: "PHQ-9 (Patient Health Questionnaire)",
    instructions: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself — or that you are a failure?",
      "Trouble concentrating on things, such as reading or watching TV?",
      "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
      "Thoughts that you would be better off dead, or of hurting yourself in some way?"
    ],
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 4) return "None / Minimal";
      if (score <= 9) return "Mild Depression";
      if (score <= 14) return "Moderate Depression";
      if (score <= 19) return "Moderately Severe Depression";
      return "Severe Depression";
    }
  },
  "GAD-7": {
    title: "GAD-7 (Generalized Anxiety Disorder)",
    instructions: "Over the last 2 weeks, how often have you been bothered by the following problems?",
    questions: [
      "Feeling nervous, anxious or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Trouble relaxing?",
      "Being so restless that it is hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid as if something awful might happen?"
    ],
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 4) return "None / Minimal";
      if (score <= 9) return "Mild Anxiety";
      if (score <= 14) return "Moderate Anxiety";
      return "Severe Anxiety";
    }
  },
  "Sleep Diary": {
    title: "Sleep Diary",
    instructions: "Answer based on your sleep patterns over the past week.",
    questions: [
      "How long did it take you to fall asleep on average?",
      "How many times did you wake up during the night?",
      "How rested did you feel in the morning?",
      "Did you take any medication to help you sleep?",
      "What was your overall sleep quality?"
    ],
    options: [
      { text: "Excellent / Normal", score: 0 },
      { text: "Fair / Slightly disrupted", score: 1 },
      { text: "Poor / Highly disrupted", score: 2 },
      { text: "Terrible / Severe insomnia", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 3) return "Normal Sleep";
      if (score <= 7) return "Mild Disturbance";
      if (score <= 11) return "Moderate Insomnia";
      return "Severe Insomnia";
    }
  },
  "AUDIT": {
    title: "AUDIT (Alcohol Use Disorders Identification Test)",
    instructions: "Answer based on your alcohol consumption habits over the past year.",
    questions: [
      "How often do you have a drink containing alcohol?",
      "How many drinks containing alcohol do you have on a typical day when you are drinking?",
      "How often do you have six or more drinks on one occasion?",
      "How often during the last year have you found that you were not able to stop drinking once you had started?",
      "How often during the last year have you failed to do what was normally expected of you because of drinking?",
      "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
      "How often during the last year have you had a feeling of guilt or remorse after drinking?",
      "How often during the last year have you been unable to remember what happened the night before because of your drinking?",
      "Have you or someone else been injured because of your drinking?",
      "Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?"
    ],
    options: [
      { text: "Never / Low Risk (0)", score: 0 },
      { text: "Monthly or less / 1-2 drinks (1)", score: 1 },
      { text: "2 to 4 times a month / 3-4 drinks (2)", score: 2 },
      { text: "2 to 3 times a week / 5+ drinks (3)", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 7) return "Low Risk";
      if (score <= 15) return "Hazardous Use";
      if (score <= 19) return "Harmful Use";
      return "High Risk / Dependency";
    }
  },
  "Y-BOCS": {
    title: "Y-BOCS (Yale-Brown Obsessive Compulsive Scale)",
    instructions: "Rate the severity of obsessive thoughts and compulsive behaviors over the past week.",
    questions: [
      "How much of your time is occupied by obsessive thoughts?",
      "How much do obsessive thoughts interfere with functioning?",
      "How much distress do obsessive thoughts cause?",
      "How much effort do you make to resist obsessive thoughts?",
      "How much control do you have over obsessive thoughts?"
    ],
    options: [
      { text: "None / Mild (0)", score: 0 },
      { text: "Mild / Manageable (1)", score: 1 },
      { text: "Moderate / Substantial (2)", score: 2 },
      { text: "Severe / Extreme (3)", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 7) return "Subclinical";
      if (score <= 15) return "Mild OCD";
      if (score <= 23) return "Moderate OCD";
      return "Severe OCD";
    }
  }
};

// --- MOCK CONSTANTS ---
const ICD10_DIAGNOSES = [
  { code: "F32.0", name: "Depressive episode, mild", cat: "Mood", dsm: "296.21 (MDD, Single, Mild)", icd11: "6A70.0" },
  { code: "F32.1", name: "Depressive episode, moderate", cat: "Mood", dsm: "296.22 (MDD, Single, Moderate)", icd11: "6A70.1" },
  { code: "F32.2", name: "Depressive episode, severe without psychotic symptoms", cat: "Mood", dsm: "296.23 (MDD, Single, Severe)", icd11: "6A70.2" },
  { code: "F32.3", name: "Depressive episode, severe with psychotic symptoms", cat: "Mood", dsm: "296.24 (MDD, Single, w/ Psychosis)", icd11: "6A70.3" },
  { code: "F33.0", name: "Recurrent depressive disorder, current episode mild", cat: "Mood", dsm: "296.31 (MDD, Recurrent, Mild)", icd11: "6A71.0" },
  { code: "F33.1", name: "Recurrent depressive disorder, current episode moderate", cat: "Mood", dsm: "296.32 (MDD, Recurrent, Moderate)", icd11: "6A71.1" },
  { code: "F33.2", name: "Recurrent depressive disorder, current episode severe without psychotic symptoms", cat: "Mood", dsm: "296.33 (MDD, Recurrent, Severe)", icd11: "6A71.2" },
  { code: "F34.1", name: "Dysthymia / Persistent depressive disorder", cat: "Mood", dsm: "300.4 (Persistent Depressive Disorder)", icd11: "6A72" },
  { code: "F31.0", name: "Bipolar affective disorder, current episode hypomanic", cat: "Mood", dsm: "296.40 (Bipolar I, Hypomanic)", icd11: "6A60" },
  { code: "F31.1", name: "Bipolar affective disorder, current episode manic without psychotic symptoms", cat: "Mood", dsm: "296.42 (Bipolar I, Manic)", icd11: "6A60.1" },
  { code: "F31.3", name: "Bipolar affective disorder, current episode mild or moderate depression", cat: "Mood", dsm: "296.52 (Bipolar I, Depressed Mod)", icd11: "6A60.3" },
  { code: "F31.5", name: "Bipolar affective disorder, current episode severe depression with psychotic symptoms", cat: "Mood", dsm: "296.54 (Bipolar I, Depressed w/ Psychosis)", icd11: "6A60.5" },
  { code: "F31.81", name: "Bipolar II disorder (recurrent major depression with hypomania)", cat: "Mood", dsm: "296.89 (Bipolar II Disorder)", icd11: "6A61" },
  { code: "F34.0", name: "Cyclothymic disorder", cat: "Mood", dsm: "301.13 (Cyclothymia)", icd11: "6A62" },
  { code: "F41.1", name: "Generalised anxiety disorder", cat: "Anxiety", dsm: "300.02 (Generalized Anxiety Disorder)", icd11: "6B00" },
  { code: "F41.0", name: "Panic disorder", cat: "Anxiety", dsm: "300.01 (Panic Disorder)", icd11: "6B01" },
  { code: "F40.0", name: "Agoraphobia", cat: "Anxiety", dsm: "300.22 (Agoraphobia)", icd11: "6B02" },
  { code: "F40.1", name: "Social anxiety disorder / Social phobia", cat: "Anxiety", dsm: "300.23 (Social Anxiety Disorder)", icd11: "6B04" },
  { code: "F40.2", name: "Specific (isolated) phobias", cat: "Anxiety", dsm: "300.29 (Specific Phobia)", icd11: "6B03" },
  { code: "F42",   name: "Obsessive-compulsive disorder", cat: "Anxiety", dsm: "300.3 (Obsessive-Compulsive Disorder)", icd11: "6B20" },
  { code: "F43.1", name: "Post-traumatic stress disorder (PTSD)", cat: "Anxiety", dsm: "309.81 (PTSD)", icd11: "6B40" },
  { code: "F43.0", name: "Acute stress reaction", cat: "Anxiety", dsm: "308.3 (Acute Stress Disorder)", icd11: "QE84" },
  { code: "F43.2", name: "Adjustment disorder with anxious / depressed mood", cat: "Anxiety", dsm: "309.28 (Adjustment Disorder)", icd11: "6B43" },
  { code: "F20.0", name: "Paranoid schizophrenia", cat: "Psychosis", dsm: "295.90 (Schizophrenia)", icd11: "6A20" },
  { code: "F20.9", name: "Schizophrenia, unspecified", cat: "Psychosis", dsm: "295.90 (Schizophrenia)", icd11: "6A20.Z" },
  { code: "F25.0", name: "Schizoaffective disorder, manic type", cat: "Psychosis", dsm: "295.70 (Schizoaffective, Bipolar)", icd11: "6A21.0" },
  { code: "F25.1", name: "Schizoaffective disorder, depressive type", cat: "Psychosis", dsm: "295.70 (Schizoaffective, Depressive)", icd11: "6A21.1" },
  { code: "F23",   name: "Acute and transient psychotic disorder (ATPD)", cat: "Psychosis", dsm: "298.8 (Brief Psychotic Disorder)", icd11: "6A23" },
  { code: "F22.0", name: "Delusional disorder", cat: "Psychosis", dsm: "297.1 (Delusional Disorder)", icd11: "6A24" },
  { code: "F10.1", name: "Harmful use of alcohol", cat: "Substance", dsm: "305.00 (Alcohol Use, Mild)", icd11: "6C40.1" },
  { code: "F10.2", name: "Alcohol dependence syndrome", cat: "Substance", dsm: "303.90 (Alcohol Use, Severe)", icd11: "6C40.2" },
  { code: "F11.2", name: "Opioid dependence syndrome", cat: "Substance", dsm: "304.00 (Opioid Use Disorder)", icd11: "6C45.2" },
  { code: "F12.2", name: "Cannabis dependence syndrome", cat: "Substance", dsm: "304.30 (Cannabis Use Disorder)", icd11: "6C41.2" },
  { code: "F17.2", name: "Tobacco / Nicotine dependence syndrome", cat: "Substance", dsm: "305.1 (Tobacco Use Disorder)", icd11: "6C4A.2" },
  { code: "F19.2", name: "Multiple drug use & psychoactive substance dependence", cat: "Substance", dsm: "304.90 (Other Substance Use)", icd11: "6C4E.2" },
  { code: "F90.0", name: "ADHD, combined presentation", cat: "ADHD", dsm: "314.01 (ADHD, Combined)", icd11: "6A05.2" },
  { code: "F90.1", name: "ADHD, predominantly inattentive presentation", cat: "ADHD", dsm: "314.00 (ADHD, Inattentive)", icd11: "6A05.0" },
  { code: "F84.0", name: "Autism spectrum disorder / Childhood autism", cat: "ADHD", dsm: "299.00 (Autism Spectrum Disorder)", icd11: "6A02" },
  { code: "F70",   name: "Mild intellectual disability", cat: "ADHD", dsm: "317 (Intellectual Disability, Mild)", icd11: "6A00.0" },
  { code: "F51.0", name: "Nonorganic insomnia / Insomnia disorder", cat: "Sleep", dsm: "307.42 (Insomnia Disorder)", icd11: "7A00" },
  { code: "F51.1", name: "Nonorganic hypersomnia", cat: "Sleep", dsm: "307.44 (Hypersomnolence Disorder)", icd11: "7A20" },
  { code: "F51.2", name: "Nonorganic sleep-wake schedule disorder", cat: "Sleep", dsm: "307.45 (Circadian Rhythm Sleep-Wake)", icd11: "7A60" },
  { code: "F60.3", name: "Emotionally unstable (Borderline) personality disorder", cat: "Personality", dsm: "301.83 (Borderline Personality)", icd11: "6D11.5" },
  { code: "F60.6", name: "Anxious [avoidant] personality disorder", cat: "Personality", dsm: "301.82 (Avoidant Personality)", icd11: "6D10" },
  { code: "F45.0", name: "Somatization disorder / Somatic symptom disorder", cat: "Personality", dsm: "300.82 (Somatic Symptom Disorder)", icd11: "6C20" },
  { code: "F45.2", name: "Hypochondriacal disorder / Illness anxiety disorder", cat: "Personality", dsm: "300.7 (Illness Anxiety Disorder)", icd11: "6B23" },
  { code: "F50.0", name: "Anorexia nervosa", cat: "Personality", dsm: "307.1 (Anorexia Nervosa)", icd11: "6B80" },
  { code: "F50.2", name: "Bulimia nervosa", cat: "Personality", dsm: "307.51 (Bulimia Nervosa)", icd11: "6B81" },
  { code: "F06.7", name: "Mild cognitive disorder", cat: "Personality", dsm: "331.83 (Mild Neurocognitive Disorder)", icd11: "6D71" },
  { code: "F00",   name: "Dementia in Alzheimer disease", cat: "Personality", dsm: "294.11 (Major NCD due to Alzheimer's)", icd11: "6D80" }
];

const COMMON_MEDS = [
  { name: "Paracetamol", strengths: ["500 mg", "650 mg", "1000 mg"], route: "Oral", defaultFreq: "Twice daily / SOS", defaultInst: "Take after food.", schedule: null, allergyClass: "Analgesic", gerdWarning: false },
  { name: "Pantoprazole", strengths: ["20 mg", "40 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take on empty stomach 30 mins before breakfast.", schedule: null, allergyClass: "PPI", gerdWarning: false },
  { name: "Amoxicillin-Clavulanate", strengths: ["375 mg", "625 mg", "1000 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Take after food. Complete course.", schedule: null, allergyClass: "Penicillins", gerdWarning: true },
  { name: "Cetirizine", strengths: ["5 mg", "10 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Take at bedtime.", schedule: null, allergyClass: "Antihistamine", gerdWarning: false },
  { name: "Metformin SR", strengths: ["500 mg", "850 mg", "1000 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Take with or after food.", schedule: null, allergyClass: "Antidiabetic", gerdWarning: true },
  { name: "Telmisartan", strengths: ["20 mg", "40 mg", "80 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take in the morning.", schedule: null, allergyClass: "ARB", gerdWarning: false },
  { name: "Azithromycin", strengths: ["250 mg", "500 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take 1 hour before or 2 hours after food.", schedule: null, allergyClass: "Macrolide", gerdWarning: true },
  { name: "Montelukast + Levocetirizine", strengths: ["10mg + 5mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Take at bedtime.", schedule: null, allergyClass: "Antihistamine", gerdWarning: false },
  { name: "Atorvastatin", strengths: ["10 mg", "20 mg", "40 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Take at bedtime.", schedule: null, allergyClass: "Statin", gerdWarning: false },
  { name: "Ondansetron", strengths: ["4 mg", "8 mg"], route: "Oral", defaultFreq: "Twice daily / SOS", defaultInst: "Take 30 mins before food.", schedule: null, allergyClass: "Antiemetic", gerdWarning: false },
  { name: "Vitamin D3", strengths: ["60,000 IU"], route: "Oral", defaultFreq: "Weekly", defaultInst: "Take once weekly with milk.", schedule: null, allergyClass: "Vitamin", gerdWarning: false },
  { name: "Aceclofenac + Paracetamol", strengths: ["100mg + 325mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Take after food.", schedule: null, allergyClass: "NSAID", gerdWarning: true },
  { name: "Escitalopram", strengths: ["5 mg", "10 mg", "20 mg"], route: "Oral", defaultFreq: "Once daily, night (1-0-0)", defaultInst: "Take after food.", schedule: null, allergyClass: "SSRI", gerdWarning: true },
  { name: "Sertraline", strengths: ["25 mg", "50 mg", "100 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with breakfast.", schedule: null, allergyClass: "SSRI", gerdWarning: true },
  { name: "Fluoxetine", strengths: ["20 mg", "40 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with food.", schedule: null, allergyClass: "SSRI", gerdWarning: true },
  { name: "Venlafaxine XR", strengths: ["37.5 mg", "75 mg", "150 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take after breakfast.", schedule: null, allergyClass: "SNRI", gerdWarning: false },
  { name: "Lithium carbonate", strengths: ["300 mg", "400 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Maintain consistent fluid intake. Regular serum levels required.", schedule: null, allergyClass: "Mood Stabilizer", gerdWarning: true },
  { name: "Sodium Valproate", strengths: ["200 mg", "500 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Take after food with water.", schedule: null, allergyClass: "Anticonvulsant", gerdWarning: true },
  { name: "Lamotrigine", strengths: ["25 mg", "50 mg", "100 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Slow titration. Report any skin rash immediately.", schedule: null, allergyClass: "Anticonvulsant", gerdWarning: false },
  { name: "Olanzapine", strengths: ["2.5 mg", "5 mg", "10 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "May cause drowsiness. Monitor fasting glucose and weight.", schedule: null, allergyClass: "Atypical Antipsychotic", gerdWarning: false },
  { name: "Aripiprazole", strengths: ["5 mg", "10 mg", "15 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with or without food.", schedule: null, allergyClass: "Atypical Antipsychotic", gerdWarning: false },
  { name: "Quetiapine", strengths: ["25 mg", "50 mg", "100 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Take at bedtime.", schedule: null, allergyClass: "Atypical Antipsychotic", gerdWarning: false },
  { name: "Clonazepam", strengths: ["0.25 mg", "0.5 mg", "1 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Short-term use only. Avoid alcohol. Schedule H1 warning.", schedule: "H1", allergyClass: "Benzodiazepines", gerdWarning: false },
  { name: "Alprazolam", strengths: ["0.25 mg", "0.5 mg"], route: "Oral", defaultFreq: "SOS / Bedtime (0-0-1)", defaultInst: "Short-term use only. Avoid dependency.", schedule: "H1", allergyClass: "Benzodiazepines", gerdWarning: false },
  { name: "Lorazepam", strengths: ["1 mg", "2 mg"], route: "Oral", defaultFreq: "Twice daily / SOS", defaultInst: "For acute anxiety. Avoid driving.", schedule: "H1", allergyClass: "Benzodiazepines", gerdWarning: false },
  { name: "Zolpidem", strengths: ["5 mg", "10 mg"], route: "Oral", defaultFreq: "Bedtime immediately before sleep", defaultInst: "Take immediately prior to sleep. Short course 2 weeks only.", schedule: "H1", allergyClass: "Z-Hypnotic", gerdWarning: false },
  { name: "Methylphenidate", strengths: ["10 mg", "18 mg", "36 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take after breakfast. Strictly barred on teleconsultations per Telemedicine Practice Guidelines 2020.", schedule: "X", allergyClass: "Psychostimulant", gerdWarning: false },
  { name: "Sulfamethoxazole / Trimethoprim", strengths: ["400/80 mg", "800/160 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Sulfa class antibacterial.", schedule: null, allergyClass: "Sulfonamides", gerdWarning: true },
  { name: "Amitriptyline", strengths: ["10 mg", "25 mg", "50 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Strong anticholinergic. May worsen gastroesophageal reflux and dry mouth.", schedule: null, allergyClass: "TCA", gerdWarning: true },
  { name: "Amlodipine", strengths: ["2.5 mg", "5 mg", "10 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Cardiovascular antihypertensive.", schedule: null, allergyClass: "Calcium Channel Blocker", gerdWarning: false },
  { name: "Levothyroxine", strengths: ["25 mcg", "50 mcg", "100 mcg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take on empty stomach 30 mins before breakfast.", schedule: null, allergyClass: "Thyroid Hormone", gerdWarning: false }
];

// Exporting core elements
window.SaronilState = store;
window.ASSESSMENT_SPECS = ASSESSMENT_SPECS;
window.ICD10_DIAGNOSES = ICD10_DIAGNOSES;
window.COMMON_MEDS = COMMON_MEDS;
