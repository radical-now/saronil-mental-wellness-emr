// Saronil Health - Psychiatry Platform Core Logic
// Coordinates state between Doctor EMR and Patient App

// --- INITIAL STATE ---
const INITIAL_STATE = {
  patients: [
    {
      id: "pat-1",
      uhid: "SH-2025-001",
      name: "Advait Rao",
      age: 34,
      gender: "Male",
      dob: "1992-05-14",
      email: "advait.rao@gmail.com",
      mobile: "+91 98765 43210",
      address: "Koramangala, Bengaluru — 560034",
      occupation: "Senior Product Manager (on leave)",
      maritalStatus: "Married",
      education: "B.Tech + MBA",
      allergies: "None known",
      medicalConditions: "Hypertension (managed with amlodipine)",
      currentMeds: [
        { name: "Escitalopram", dose: "10 mg", freq: "Once daily, night (after food)", duration: "4 weeks" },
        { name: "Clonazepam", dose: "0.5 mg", freq: "Bedtime (short course)", duration: "2 weeks only" }
      ],
      caregiver: {
        name: "Sunitha Rao",
        relationship: "Spouse",
        mobile: "+91 98765 11111",
        permissions: {
          appointments: true,
          prescriptions: true,
          assessments: true
        }
      },
      timeline: [
        { date: "2025-06-10", type: "Assessment", desc: "GAD-7 Completed", details: "Score: 12/21 (Moderate Anxiety)" },
        { date: "2025-06-24", type: "Registration", desc: "Patient registered at Saronil Health", details: "Initial onboarding complete" },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 18/27 (Moderately Severe Depression)" },
        { date: "2025-06-24", type: "Consultation", desc: "First Consultation with Dr. Riya Sharma", details: "Working diagnosis: Major Depressive Disorder (6A70.1). Initiated Escitalopram.", hasRecording: true, recordingTranscript: "[00:01] Doctor: Good morning Advait. I am Dr. Riya Sharma. I understand your sister encouraged you to come in today. How can I help you?\n[00:08] Patient: Yes, hello doctor. I have just been feeling really low for the past three months. Ever since I lost my job as a product manager, it feels like everything is falling apart.\n[00:18] Doctor: I am sorry to hear about your job. Can you describe what this low mood feels like on a daily basis?\n[00:25] Patient: It is like being underwater. I wake up around 4 AM every single morning with a heavy feeling in my chest and cannot fall back asleep. I have no interest in doing anything, even things I used to love like cycling.\n[00:37] Doctor: That sounds incredibly heavy and exhausting. Are you experiencing any thoughts of suicide or self-harm?\n[00:44] Patient: Sometimes I just feel like it would be easier if I did not wake up at all. But I don't have any plan or intention to end my life. I think about my sister and know I cannot do that.\n[00:54] Doctor: Thank you for sharing that with me. We call those passive suicidal thoughts. We will take this very seriously, build a safety plan, and start treatment. I recommend Escitalopram 10mg to help stabilize the neurotransmitters, and a referral for Cognitive Behavioral Therapy. How do you feel about that plan?\n[01:10] Patient: I am open to anything that helps. I just want to feel like myself again.\n[01:16] Doctor: Absolutely. We will take this step by step. We will start with a weekly check-in." }
      ]
    },
    {
      id: "pat-2",
      uhid: "SH-2025-002",
      name: "Dr. Anjali Deshmukh",
      age: 42,
      gender: "Female",
      dob: "1984-11-20",
      email: "anjali.d@gmail.com",
      mobile: "+91 99887 76655",
      address: "Indiranagar, Bengaluru — 560038",
      occupation: "Pediatrician",
      maritalStatus: "Married",
      education: "MBBS, MD Pediatrics",
      allergies: "Sulfonamides",
      medicalConditions: "Gastroesophageal Reflux Disease",
      currentMeds: [
        { name: "Sertraline", dose: "50 mg", freq: "Once daily, morning", duration: "8 weeks" },
        { name: "Pregabalin", dose: "75 mg", freq: "Bedtime", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Sanjay Deshmukh",
        relationship: "Spouse",
        mobile: "+91 99887 11223",
        permissions: { appointments: true, prescriptions: true, assessments: false }
      },
      timeline: [
        { date: "2025-05-15", type: "Consultation", desc: "Follow-up Consultation", details: "Anxiety symptoms improving. Dose of Sertraline continued.", hasRecording: true, recordingTranscript: "[00:01] Doctor: Good afternoon Dr. Anjali. How have you been feeling since our last visit?\n[00:06] Patient: Hello Riya. The physical anxiety symptoms are slightly better. The palpitations aren't as intense, but the underlying worry is still persistent.\n[00:15] Doctor: Understood. Are you experiencing the panic attacks during your clinical rounds or meetings?\n[00:21] Patient: Mostly before our weekly pediatric department meetings. I get chest tightness and feel like I cannot breathe.\n[00:29] Doctor: Okay. Have you been using the box breathing techniques we discussed?\n[00:34] Patient: Yes, I use it when the chest tightness starts. It does help bring my pulse rate down, but the catastrophic thoughts about making mistakes still occur.\n[00:43] Doctor: Excellent work on applying the breathing exercises. We will keep Sertraline at 50mg and continue our weekly cognitive restructuring sessions." },
        { date: "2025-06-24", type: "Assessment", desc: "GAD-7 Completed", details: "Score: 11/21 (Moderate Anxiety, down from 14/21)" }
      ]
    },
    {
      id: "pat-3",
      uhid: "SH-2025-003",
      name: "Vikram Malhotra",
      age: 29,
      gender: "Male",
      dob: "1997-03-08",
      email: "vikram.m@gmail.com",
      mobile: "+91 97766 55443",
      address: "Whitefield, Bengaluru — 560066",
      occupation: "Freelance Animator",
      maritalStatus: "Single",
      education: "B.FA Fine Arts",
      allergies: "Penicillin",
      medicalConditions: "None",
      currentMeds: [
        { name: "Lithium carbonate", dose: "400 mg", freq: "Twice daily", duration: "12 weeks" },
        { name: "Olanzapine", dose: "5 mg", freq: "Bedtime", duration: "6 weeks" }
      ],
      caregiver: {
        name: "Devendra Malhotra",
        relationship: "Father",
        mobile: "+91 97766 12345",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-18", type: "Consultation", desc: "Emergency Teleconsultation", details: "Hypomanic symptoms. Initiated Olanzapine.", hasRecording: true, recordingTranscript: "[00:01] Doctor: Hello Vikram. Thank you for hopping on this emergency call. Your father mentioned you were feeling very overwhelmed.\n[00:07] Patient: Yes, doctor. The high energy phase completely crashed three days ago. Now I feel like I'm sinking. I don't want to leave my room.\n[00:16] Doctor: I hear you. The Bipolar II cycle can feel extremely jarring. Are you having any suicidal thoughts?\n[00:23] Patient: Yes, I have this persistent wish that I just wouldn't wake up in the morning. It feels like the pain is too much.\n[00:30] Doctor: Do you have any plans to harm yourself, Vikram?\n[00:34] Patient: No, no active plans. I promised my father I would speak to you first. But the thoughts are very loud.\n[00:41] Doctor: I am very glad you reached out. We are going to adjust your medications to help stabilize this depressive episode. We will continue Lithium and add Olanzapine 5mg at night. Your father will help monitor the dosing." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 22/27 (Severe Depression. High risk flagged due to suicidal ideation responses)." }
      ]
    },
    {
      id: "pat-4",
      uhid: "SH-2025-004",
      name: "Aditya Verma",
      age: 38,
      gender: "Male",
      dob: "1988-09-12",
      email: "aditya.v@gmail.com",
      mobile: "+91 96655 44332",
      address: "HSR Layout, Bengaluru — 560102",
      occupation: "Sales Director",
      maritalStatus: "Divorced",
      education: "MBA Marketing",
      allergies: "None",
      medicalConditions: "Fatty Liver",
      currentMeds: [
        { name: "Naltrexone", dose: "50 mg", freq: "Once daily, morning", duration: "12 weeks" }
      ],
      caregiver: {
        name: "Neha Verma",
        relationship: "Sister",
        mobile: "+91 96655 99999",
        permissions: { appointments: false, prescriptions: false, assessments: false }
      },
      timeline: [
        { date: "2025-06-29", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up consultation. Reports 14 days of abstinence. Cravings reduced. Mild nausea reported." },
        { date: "2025-06-23", type: "Assessment", desc: "AUDIT Completed", details: "Score: 14/40 (Harmful Use)" },
        { date: "2025-06-15", type: "Consultation", desc: "Follow-up Consultation", details: "Presented with mild cravings. Encouraged to continue therapy. Initiated Sleep hygiene counseling." },
        { date: "2025-06-01", type: "Consultation", desc: "Initial Assessment", details: "Alcohol craving reduction. Initiated Naltrexone." }
      ]
    },
    {
      id: "pat-5",
      uhid: "SH-2025-005",
      name: "Rohan Kapur",
      age: 21,
      gender: "Male",
      dob: "2005-02-28",
      email: "rohan.kapur@gmail.com",
      mobile: "+91 98888 22222",
      address: "Whitefield, Bengaluru — 560066",
      occupation: "College Student",
      maritalStatus: "Single",
      education: "B.Sc Physics Undergrad",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Methylphenidate", dose: "18 mg", freq: "Once daily, morning (after breakfast)", duration: "6 weeks" }
      ],
      caregiver: {
        name: "Siddharth Kapur",
        relationship: "Father",
        mobile: "+91 98888 11111",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-07-03", type: "Consultation", desc: "Follow-up Consultation", details: "Dose titrated up to 36mg to optimize study block coverage. BP normal." },
        { date: "2025-06-19", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Improvement in focus and lecture attentiveness. Mild evening appetite loss noted." },
        { date: "2025-06-05", type: "Consultation", desc: "Initial ADHD Consult", details: "DIVA-5 assessment completed. Initiated Methylphenidate ER." }
      ]
    },
    {
      id: "pat-6",
      uhid: "SH-2025-006",
      name: "Neha Gupta",
      age: 55,
      gender: "Female",
      dob: "1971-06-15",
      email: "neha.gupta@gmail.com",
      mobile: "+91 97777 66666",
      address: "Jayanagar, Bengaluru — 560041",
      occupation: "High School Teacher",
      maritalStatus: "Married",
      education: "M.Sc Mathematics, B.Ed",
      allergies: "None",
      medicalConditions: "Type 2 Diabetes Mellitus",
      currentMeds: [
        { name: "Venlafaxine", dose: "75 mg", freq: "Once daily, morning", duration: "8 weeks" },
        { name: "Metformin", dose: "500 mg", freq: "Twice daily, with meals", duration: "Continuous" }
      ],
      caregiver: {
        name: "Rajesh Gupta",
        relationship: "Spouse",
        mobile: "+91 97777 11223",
        permissions: { appointments: true, prescriptions: true, assessments: false }
      },
      timeline: [
        { date: "2025-06-09", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Recurrent depression stable. Neuropathy pains managed. HbA1c checked." },
        { date: "2025-05-26", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Mood starting to recover. Patient reports better sleep and appetite. Venlafaxine tolerated well." },
        { date: "2025-05-12", type: "Consultation", desc: "Depression Relapse Evaluation", details: "Recurrent MDD episode. Initiated Venlafaxine." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 12/27 (Moderate Depression)" }
      ]
    },
    {
      id: "pat-7",
      uhid: "SH-2025-007",
      name: "Kishore Kumar",
      age: 63,
      gender: "Male",
      dob: "1963-04-10",
      email: "kishore.k@gmail.com",
      mobile: "+91 99999 11111",
      address: "Indiranagar, Bengaluru — 560038",
      occupation: "Retired Clerk",
      maritalStatus: "Married",
      education: "B.A. General",
      allergies: "None",
      medicalConditions: "Mild Cognitive Impairment, Vitamin B12 Deficiency",
      currentMeds: [
        { name: "Donepezil", dose: "5 mg", freq: "Bedtime", duration: "12 weeks" },
        { name: "Escitalopram", dose: "5 mg", freq: "Bedtime", duration: "12 weeks" }
      ],
      caregiver: {
        name: "Dr. Anirudh Kumar",
        relationship: "Son",
        mobile: "+91 99999 22222",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-17", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. MCI stable. Daily calendar routine implemented. Plan to repeat MMSE in 5 months." },
        { date: "2025-06-03", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Donepezil tolerated without nausea. Family reports improved engagement. B12 injections completed." },
        { date: "2025-05-20", type: "Consultation", desc: "Memory Assessment", details: "MMSE score: 26/30. Initiated Donepezil." }
      ]
    },
    {
      id: "pat-8",
      uhid: "SH-2025-008",
      name: "Sanjana Iyer",
      age: 20,
      gender: "Female",
      dob: "2006-08-25",
      email: "sanjana.i@gmail.com",
      mobile: "+91 96666 55555",
      address: "Malleshwaram, Bengaluru — 560003",
      occupation: "College Student",
      maritalStatus: "Single",
      education: "2nd Year B.Sc",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Fluoxetine", dose: "40 mg", freq: "Once daily, morning", duration: "8 weeks" }
      ],
      caregiver: {
        name: "Lalitha Iyer",
        relationship: "Mother",
        mobile: "+91 96666 11223",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-07-06", type: "Consultation", desc: "Follow-up Consultation", details: "Fluoxetine titrated up to 60mg. Tolerated well. Continue ERP homework." },
        { date: "2025-06-22", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Hand skin shows mild improvement. Sleep delay managed. Refer for ERP weekly sessions." },
        { date: "2025-06-08", type: "Consultation", desc: "OCD Triage", details: "Y-BOCS score: 28/40. Contamination obsessions. Initiated Fluoxetine." }
      ]
    },
    {
      id: "pat-9",
      uhid: "SH-2025-009",
      name: "Gaurav Gill",
      age: 30,
      gender: "Male",
      dob: "1996-12-05",
      email: "gaurav.g@gmail.com",
      mobile: "+91 95555 44444",
      address: "HSR Layout, Bengaluru — 560102",
      occupation: "Fitness Coach",
      maritalStatus: "Single",
      education: "B.P.Ed Physical Education",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Zolpidem", dose: "5 mg", freq: "Bedtime (SOS only, max 3x/week)", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Harpreet Gill",
        relationship: "Brother",
        mobile: "+91 95555 11111",
        permissions: { appointments: true, prescriptions: false, assessments: true }
      },
      timeline: [
        { date: "2025-06-29", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Insomnia resolved. Zolpidem tapered down to max 2x weekly. Good responses to CBT-I." },
        { date: "2025-06-15", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Latency reduced to 90 mins. Pre-workout supplement cutoff after 2 PM maintained. CBT-I underway." },
        { date: "2025-06-01", type: "Consultation", desc: "Insomnia Consult", details: "Sleep onset latency: 120 mins. Instructed on stimulant restrictions." },
        { date: "2025-06-24", type: "Assessment", desc: "Sleep Diary Completed", details: "Insomnia symptoms logged: Moderate." }
      ]
    },
    {
      id: "pat-10",
      uhid: "SH-2025-010",
      name: "Zoya Khan",
      age: 41,
      gender: "Female",
      dob: "1985-11-30",
      email: "zoya.k@gmail.com",
      mobile: "+91 94444 33333",
      address: "Koramangala, Bengaluru — 560034",
      occupation: "Freelance Fashion Designer",
      maritalStatus: "Single",
      education: "NIFT Fashion Design Graduate",
      allergies: "None",
      medicalConditions: "Borderline Personality Disorder",
      currentMeds: [
        { name: "Quetiapine", dose: "25 mg", freq: "Bedtime (SOS for distress)", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Yasmin Khan",
        relationship: "Sister",
        mobile: "+91 94444 11111",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-18", type: "Consultation", desc: "Crisis Evaluation", details: "Relationship stressors. Urgent referral for DBT distress tolerance." },
        { date: "2025-06-04", type: "Consultation", desc: "Follow-up Consultation", details: "Follow-up. Emotional volatility tracking. Boundary setting exercises reviewed." },
        { date: "2025-05-21", type: "Consultation", desc: "Initial Consultation", details: "Initial consultation. Presented with chronic emptiness, labile affect, self-harm impulses. Referred for comprehensive DBT program." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 16/27 (Moderate-Severe Depression)" }
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
    { id: "appt-1", patientId: "pat-1", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-07-01", time: "10:00 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-2", patientId: "pat-2", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "09:30 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-3", patientId: "pat-3", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "10:00 AM", type: "Follow-up Consultation", mode: "Teleconsultation", fee: 1000, status: "Confirmed" },
    { id: "appt-4", patientId: "pat-4", doctorId: "doc-2", doctorName: "Dr. Vivek Anand", date: "2025-06-24", time: "10:30 AM", type: "New Consultation", mode: "In-person", fee: 1200, status: "Confirmed" },
    { id: "appt-5", patientId: "pat-5", doctorId: "doc-2", doctorName: "Dr. Vivek Anand", date: "2025-06-24", time: "11:00 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1200, status: "Confirmed" },
    { id: "appt-6", patientId: "pat-6", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "11:30 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-7", patientId: "pat-7", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "12:00 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-8", patientId: "pat-8", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "12:30 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-9", patientId: "pat-9", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "01:00 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-10", patientId: "pat-10", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "01:30 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-11", patientId: "pat-9", doctorId: "doc-3", doctorName: "Dr. Ramesh Kumar", date: "2025-06-24", time: "02:00 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1500, status: "Confirmed" },
    { id: "appt-12", patientId: "pat-10", doctorId: "doc-3", doctorName: "Dr. Ramesh Kumar", date: "2025-06-24", time: "02:30 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1500, status: "Confirmed" },
    { id: "appt-13", patientId: "pat-8", doctorId: "doc-4", doctorName: "Dr. Sneha Patil", date: "2025-06-24", time: "03:00 PM", type: "New Consultation", mode: "In-person", fee: 1200, status: "Confirmed" }
  ],

  assessments: [
    { id: "assess-1", patientId: "pat-1", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Pending", dueDate: "2025-06-30", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-2", patientId: "pat-1", name: "Sleep Diary", purpose: "Weekly Sleep Quality tracker", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Pending", dueDate: "2025-06-30", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-3", patientId: "pat-1", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Completed", dueDate: "2025-06-24", score: 18, severity: "Moderately Severe", completedDate: "2025-06-24 08:41 AM", responses: { q1: 3, q2: 3, q3: 2, q4: 3, q5: 2, q6: 2, q7: 1, q8: 1, q9: 1 } },
    { id: "assess-4", patientId: "pat-2", name: "GAD-7", purpose: "Anxiety scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-15", status: "Completed", dueDate: "2025-06-24", score: 11, severity: "Moderate", completedDate: "2025-06-24 09:10 AM", responses: { q1: 2, q2: 2, q3: 1, q4: 2, q5: 2, q6: 1, q7: 1 } },
    { id: "assess-5", patientId: "pat-3", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Completed", dueDate: "2025-06-24", score: 22, severity: "Severe", completedDate: "2025-06-24 09:55 AM", responses: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 2, q6: 3, q7: 2, q8: 1, q9: 2 } },
    { id: "assess-6", patientId: "pat-4", name: "AUDIT", purpose: "Alcohol Use scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-15", status: "Completed", dueDate: "2025-06-23", score: 14, severity: "Harmful Use", completedDate: "2025-06-23 06:30 PM", responses: null },
    { id: "assess-7", patientId: "pat-5", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Vivek Anand", assignedDate: "2025-06-05", status: "Pending", dueDate: "2025-07-15", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-8", patientId: "pat-6", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-05-12", status: "Completed", dueDate: "2025-06-24", score: 12, severity: "Moderate", completedDate: "2025-06-24 10:45 AM", responses: { q1: 1, q2: 2, q3: 2, q4: 1, q5: 2, q6: 1, q7: 1, q8: 1, q9: 1 } },
    { id: "assess-9", patientId: "pat-7", name: "Sleep Diary", purpose: "Insomnia scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-05-20", status: "Pending", dueDate: "2025-07-20", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-10", patientId: "pat-8", name: "GAD-7", purpose: "Anxiety scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-08", status: "Pending", dueDate: "2025-07-08", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-11", patientId: "pat-9", name: "Sleep Diary", purpose: "Sleep tracker", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-01", status: "Completed", dueDate: "2025-06-24", score: 8, severity: "Mild Disturbance", completedDate: "2025-06-24 11:15 AM", responses: { q1: 2, q2: 2, q3: 1, q4: 2, q5: 1 } },
    { id: "assess-12", patientId: "pat-10", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-18", status: "Completed", dueDate: "2025-06-24", score: 16, severity: "Moderately Severe", completedDate: "2025-06-24 11:30 AM", responses: { q1: 2, q2: 2, q3: 3, q4: 2, q5: 2, q6: 2, q7: 1, q8: 1, q9: 1 } }
  ],

  prescriptions: [
    {
      id: "rx-1",
      patientId: "pat-1",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-24",
      diagnosis: "Major Depressive Disorder (ICD-11: 6A70.1)",
      medicines: [
        { name: "Escitalopram", strength: "10 mg", route: "Oral", freq: "Once daily, night (1-0-0)", duration: "4 weeks", instructions: "Take after food. May cause mild initial nausea." },
        { name: "Clonazepam", strength: "0.5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "For sleep initiation. Do not stop abruptly." }
      ],
      followupDate: "2025-07-01",
      digitalSignature: "Dr. R. Sharma",
      hasRecording: true,
      recordingTranscript: "[00:01] Doctor: Good morning Advait. I am Dr. Riya Sharma. I understand your sister encouraged you to come in today. How can I help you?\n[00:08] Patient: Yes, hello doctor. I have just been feeling really low for the past three months. Ever since I lost my job as a product manager, it feels like everything is falling apart.\n[00:18] Doctor: I am sorry to hear about your job. Can you describe what this low mood feels like on a daily basis?\n[00:25] Patient: It is like being underwater. I wake up around 4 AM every single morning with a heavy feeling in my chest and cannot fall back asleep. I have no interest in doing anything, even things I used to love like cycling.\n[00:37] Doctor: That sounds incredibly heavy and exhausting. Are you experiencing any thoughts of suicide or self-harm?\n[00:44] Patient: Sometimes I just feel like it would be easier if I did not wake up at all. But I don't have any plan or intention to end my life. I think about my sister and know I cannot do that.\n[00:54] Doctor: Thank you for sharing that with me. We call those passive suicidal thoughts. We will take this very seriously, build a safety plan, and start treatment. I recommend Escitalopram 10mg to help stabilize the neurotransmitters, and a referral for Cognitive Behavioral Therapy. How do you feel about that plan?\n[01:10] Patient: I am open to anything that helps. I just want to feel like myself again.\n[01:16] Doctor: Absolutely. We will take this step by step. We will start with a weekly check-in.",
      notes: "Patient presenting with recurrent MDD, moderate-severe episode. Reports early morning awakening, psychomotor slowing, and passive suicidal thoughts. Initiated Escitalopram 10mg."
    },
    {
      id: "rx-2",
      patientId: "pat-2",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-15",
      diagnosis: "Generalized Anxiety Disorder (ICD-11: 6B00)",
      medicines: [
        { name: "Sertraline", strength: "50 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Take with water. Keep consistent." },
        { name: "Pregabalin", strength: "75 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Take at bedtime. May cause initial sleepiness." }
      ],
      followupDate: "2025-06-12",
      digitalSignature: "Dr. R. Sharma",
      hasRecording: true,
      recordingTranscript: "[00:01] Doctor: Good afternoon Dr. Anjali. How have you been feeling since our last visit?\n[00:06] Patient: Hello Riya. The physical anxiety symptoms are slightly better. The palpitations aren't as intense, but the underlying worry is still persistent.\n[00:15] Doctor: Understood. Are you experiencing the panic attacks during your clinical rounds or meetings?\n[00:21] Patient: Mostly before our weekly pediatric department meetings. I get chest tightness and feel like I cannot breathe.\n[00:29] Doctor: Okay. Have you been using the box breathing techniques we discussed?\n[00:34] Patient: Yes, I use it when the chest tightness starts. It does help bring my pulse rate down, but the catastrophic thoughts about making mistakes still occur.\n[00:43] Doctor: Excellent work on applying the breathing exercises. We will keep Sertraline at 50mg and continue our weekly cognitive restructuring sessions.",
      notes: "Follow-up consultation. Reports somatic panic indicators improved but baseline worry remains high. Continued Sertraline and Pregabalin."
    },
    {
      id: "rx-3",
      patientId: "pat-2",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-01",
      diagnosis: "Generalized Anxiety Disorder (ICD-11: 6B00)",
      medicines: [
        { name: "Sertraline", strength: "50 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Titrated up from 25mg." },
        { name: "Pregabalin", strength: "75 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Take at bedtime." }
      ],
      followupDate: "2025-05-15",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Titrated Sertraline to 50mg daily due to partial response. Somatic tremor monitored."
    },
    {
      id: "rx-4",
      patientId: "pat-2",
      doctorName: "Dr. Riya Sharma",
      date: "2025-04-15",
      diagnosis: "Generalized Anxiety Disorder (ICD-11: 6B00)",
      medicines: [
        { name: "Sertraline", strength: "25 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Initial starting dose." },
        { name: "Pregabalin", strength: "75 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Take at bedtime for physical anxiety." }
      ],
      followupDate: "2025-05-01",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation. Presented with severe panic attacks, muscle tension, and chest tightness. Initiated Sertraline and Pregabalin."
    },
    {
      id: "rx-5",
      patientId: "pat-3",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-18",
      diagnosis: "Bipolar affective disorder, current episode depressed (ICD-10: F31.3)",
      medicines: [
        { name: "Lithium Carbonate", strength: "400 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "4 weeks", instructions: "Keep well hydrated. Do not alter salt intake." },
        { name: "Olanzapine", strength: "5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Added to target severe depressive crash and suicidal ideation." }
      ],
      followupDate: "2025-07-02",
      digitalSignature: "Dr. R. Sharma",
      hasRecording: true,
      recordingTranscript: "[00:01] Doctor: Hello Vikram. Thank you for hopping on this emergency call. Your father mentioned you were feeling very overwhelmed.\n[00:07] Patient: Yes, doctor. The high energy phase completely crashed three days ago. Now I feel like I'm sinking. I don't want to leave my room.\n[00:16] Doctor: I hear you. The Bipolar II cycle can feel extremely jarring. Are you having any suicidal thoughts?\n[00:23] Patient: Yes, I have this persistent wish that I just wouldn't wake up in the morning. It feels like the pain is too much.\n[00:30] Doctor: Do you have any plans to harm yourself, Vikram?\n[00:34] Patient: No, no active plans. I promised my father I would speak to you first. But the thoughts are very loud.\n[00:41] Doctor: I am very glad you reached out. We are going to adjust your medications to help stabilize this depressive episode. We will continue Lithium and add Olanzapine 5mg at night. Your father will help monitor the dosing.",
      notes: "Emergency teleconsultation. Patient has crashed from hypomanic phase into severe depression with suicidal ideation. Initiated Olanzapine 5mg HS."
    },
    {
      id: "rx-6",
      patientId: "pat-3",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-04",
      diagnosis: "Bipolar affective disorder, current episode hypomanic (ICD-10: F31.0)",
      medicines: [
        { name: "Lithium Carbonate", strength: "400 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "2 weeks", instructions: "Monitor levels. Stay hydrated." },
        { name: "Olanzapine", strength: "2.5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Take at bedtime for hyperactivity/insomnia." }
      ],
      followupDate: "2025-06-18",
      digitalSignature: "Dr. R. Sharma",
      notes: "Routine follow-up. Elevated mood, pressured speech, sleep reduced to 4 hours. Lithium continued, added low dose Olanzapine 2.5mg HS to stabilize mood."
    },
    {
      id: "rx-7",
      patientId: "pat-3",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-20",
      diagnosis: "Bipolar affective disorder, in remission (ICD-10: F31.7)",
      medicines: [
        { name: "Lithium Carbonate", strength: "400 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "2 weeks", instructions: "Take after meals." }
      ],
      followupDate: "2025-06-04",
      digitalSignature: "Dr. R. Sharma",
      notes: "Euthymic phase. Lithium serum level: 0.7 mEq/L. Tolerating medication well."
    },
    {
      id: "rx-8",
      patientId: "pat-3",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-05",
      diagnosis: "Bipolar affective disorder (ICD-10: F31.9)",
      medicines: [
        { name: "Lithium Carbonate", strength: "300 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "2 weeks", instructions: "Starting dose." }
      ],
      followupDate: "2025-05-20",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial psychiatric consultation. History of hypomanic spikes and depressive crashes. Diagnostic workup started; initiated Lithium titration."
    },
    {
      id: "rx-9",
      patientId: "pat-4",
      doctorName: "Dr. Vivek Anand",
      date: "2025-06-01",
      diagnosis: "Alcohol dependence syndrome (ICD-10: F10.2)",
      medicines: [
        { name: "Naltrexone", strength: "50 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Take in the morning. Report any liver discomfort." }
      ],
      followupDate: "2025-06-15",
      digitalSignature: "Dr. V. Anand",
      notes: "Initial consultation. Presented with heavy drinking, intense cravings. Initiated Naltrexone 50mg daily."
    },
    {
      id: "rx-10",
      patientId: "pat-4",
      doctorName: "Dr. Vivek Anand",
      date: "2025-06-15",
      diagnosis: "Alcohol dependence syndrome (ICD-10: F10.2)",
      medicines: [
        { name: "Naltrexone", strength: "50 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Continue regular dosing." }
      ],
      followupDate: "2025-06-29",
      digitalSignature: "Dr. V. Anand",
      notes: "Follow-up consultation. Reports 14 days of abstinence. Cravings reduced. Mild nausea reported, otherwise tolerating well."
    },
    {
      id: "rx-11",
      patientId: "pat-4",
      doctorName: "Dr. Vivek Anand",
      date: "2025-06-29",
      diagnosis: "Alcohol dependence syndrome (ICD-10: F10.2)",
      medicines: [
        { name: "Naltrexone", strength: "50 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Maintain compliance." }
      ],
      followupDate: "2025-07-27",
      digitalSignature: "Dr. V. Anand",
      notes: "Follow-up. Abstinence maintained continuously. Sleep is restoring. Continue Naltrexone therapy."
    },
    {
      id: "rx-12",
      patientId: "pat-5",
      doctorName: "Dr. Vivek Anand",
      date: "2025-06-05",
      diagnosis: "ADHD, predominantly inattentive (ICD-10: F90.0)",
      medicines: [
        { name: "Methylphenidate ER", strength: "18 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Take immediately after breakfast. Do not take in the evening." }
      ],
      followupDate: "2025-06-19",
      digitalSignature: "Dr. V. Anand",
      notes: "Initial consultation. Confirmed ADHD diagnosis. Baseline ECG normal. Initiated Methylphenidate ER 18mg daily."
    },
    {
      id: "rx-13",
      patientId: "pat-5",
      doctorName: "Dr. Vivek Anand",
      date: "2025-06-19",
      diagnosis: "ADHD, predominantly inattentive (ICD-10: F90.0)",
      medicines: [
        { name: "Methylphenidate ER", strength: "18 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Maintain morning schedule." }
      ],
      followupDate: "2025-07-03",
      digitalSignature: "Dr. V. Anand",
      notes: "Follow-up. Improvement in focus and lecture attentiveness. Mild evening appetite loss noted, weight stable."
    },
    {
      id: "rx-14",
      patientId: "pat-5",
      doctorName: "Dr. Vivek Anand",
      date: "2025-07-03",
      diagnosis: "ADHD, predominantly inattentive (ICD-10: F90.0)",
      medicines: [
        { name: "Methylphenidate ER", strength: "36 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Increased dose. Monitor BP." }
      ],
      followupDate: "2025-07-31",
      digitalSignature: "Dr. V. Anand",
      notes: "Dose titrated up to 36mg to optimize study block coverage. BP normal: 118/76 mmHg."
    },
    {
      id: "rx-15",
      patientId: "pat-6",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-12",
      diagnosis: "Recurrent MDD, moderate (ICD-10: F33.1)",
      medicines: [
        { name: "Venlafaxine", strength: "75 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Take with food. Do not miss doses." },
        { name: "Metformin", strength: "500 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "4 weeks", instructions: "Continue for diabetes control." }
      ],
      followupDate: "2025-05-26",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation for MDD relapse. Somatic exhaustion and diabetic neuropathy pains noted. Initiated Venlafaxine 75mg."
    },
    {
      id: "rx-16",
      patientId: "pat-6",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-26",
      diagnosis: "Recurrent MDD, moderate (ICD-10: F33.1)",
      medicines: [
        { name: "Venlafaxine", strength: "75 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Continue regular dose." },
        { name: "Metformin", strength: "500 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "4 weeks", instructions: "Continue regular dose." }
      ],
      followupDate: "2025-06-09",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Mood starting to recover. Patient reports better sleep and appetite. Venlafaxine tolerated well."
    },
    {
      id: "rx-17",
      patientId: "pat-6",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-09",
      diagnosis: "Recurrent MDD, moderate (ICD-10: F33.1)",
      medicines: [
        { name: "Venlafaxine", strength: "75 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Maintain compliance." },
        { name: "Metformin", strength: "500 mg", route: "Oral", freq: "Twice daily (1-0-1)", duration: "4 weeks", instructions: "Regular dosing." }
      ],
      followupDate: "2025-07-07",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Recurrent depression stable. Neuropathy pains managed. HbA1c checked."
    },
    {
      id: "rx-18",
      patientId: "pat-7",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-20",
      diagnosis: "Mild cognitive impairment (ICD-10: F06.7)",
      medicines: [
        { name: "Donepezil", strength: "5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Take at bedtime. Report any severe nausea." },
        { name: "Methylcobalamin (B12)", strength: "1500 mcg", route: "Oral", freq: "Once daily (1-0-0)", duration: "4 weeks", instructions: "For B12 deficiency correction." }
      ],
      followupDate: "2025-06-03",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation. MMSE score 26/30. B12 deficiency found. Initiated Donepezil 5mg HS and oral B12."
    },
    {
      id: "rx-19",
      patientId: "pat-7",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-03",
      diagnosis: "Mild cognitive impairment (ICD-10: F06.7)",
      medicines: [
        { name: "Donepezil", strength: "5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "Maintain bedtime routine." }
      ],
      followupDate: "2025-06-17",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Donepezil tolerated without nausea. Family reports improved engagement. B12 injections completed."
    },
    {
      id: "rx-20",
      patientId: "pat-7",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-17",
      diagnosis: "Mild cognitive impairment (ICD-10: F06.7)",
      medicines: [
        { name: "Donepezil", strength: "5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "4 weeks", instructions: "Continue regular dosing." }
      ],
      followupDate: "2025-07-15",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. MCI stable. Daily calendar routine implemented. Plan to repeat MMSE in 5 months."
    },
    {
      id: "rx-21",
      patientId: "pat-8",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-08",
      diagnosis: "Obsessive-compulsive disorder (ICD-10: F42)",
      medicines: [
        { name: "Fluoxetine", strength: "40 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Take with breakfast. May cause initial sleep disruption." }
      ],
      followupDate: "2025-06-22",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation. Y-BOCS score 28/40. Skin on hands raw due to washing. Initiated high-dose Fluoxetine."
    },
    {
      id: "rx-22",
      patientId: "pat-8",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-22",
      diagnosis: "Obsessive-compulsive disorder (ICD-10: F42)",
      medicines: [
        { name: "Fluoxetine", strength: "40 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "2 weeks", instructions: "Continue morning dose." }
      ],
      followupDate: "2025-07-06",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Hand skin shows mild improvement. Sleep delay managed. Refer for ERP weekly sessions."
    },
    {
      id: "rx-23",
      patientId: "pat-8",
      doctorName: "Dr. Riya Sharma",
      date: "2025-07-06",
      diagnosis: "Obsessive-compulsive disorder (ICD-10: F42)",
      medicines: [
        { name: "Fluoxetine", strength: "60 mg", route: "Oral", freq: "Once daily, morning (1-0-0)", duration: "4 weeks", instructions: "Dose titration to target compulsions." }
      ],
      followupDate: "2025-08-03",
      digitalSignature: "Dr. R. Sharma",
      notes: "Fluoxetine titrated up to 60mg. Tolerated well. Continue ERP homework."
    },
    {
      id: "rx-24",
      patientId: "pat-9",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-01",
      diagnosis: "Chronic insomnia disorder (ICD-10: F51.0)",
      medicines: [
        { name: "Zolpidem", strength: "5 mg", route: "Oral", freq: "SOS (Bedtime, max 3x weekly)", duration: "2 weeks", instructions: "Take only if unable to sleep after 30 mins in bed." }
      ],
      followupDate: "2025-06-15",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation. Presented with sleep latency >120 mins. Sleep hygiene counseling provided. Prescribed Zolpidem SOS."
    },
    {
      id: "rx-25",
      patientId: "pat-9",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-15",
      diagnosis: "Chronic insomnia disorder (ICD-10: F51.0)",
      medicines: [
        { name: "Zolpidem", strength: "5 mg", route: "Oral", freq: "SOS (Bedtime, max 3x weekly)", duration: "2 weeks", instructions: "Continue SOS routine." }
      ],
      followupDate: "2025-06-29",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Latency reduced to 90 mins. Pre-workout supplement cutoff after 2 PM maintained. CBT-I underway."
    },
    {
      id: "rx-26",
      patientId: "pat-9",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-29",
      diagnosis: "Chronic insomnia disorder (ICD-10: F51.0)",
      medicines: [
        { name: "Zolpidem", strength: "5 mg", route: "Oral", freq: "SOS (Bedtime, max 2x weekly)", duration: "4 weeks", instructions: "Tapering frequency." }
      ],
      followupDate: "2025-07-27",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Insomnia resolved. Zolpidem tapered down to max 2x weekly. Good responses to CBT-I."
    },
    {
      id: "rx-27",
      patientId: "pat-10",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-18",
      diagnosis: "Borderline personality disorder (ICD-10: F60.3)",
      medicines: [
        { name: "Quetiapine", strength: "25 mg", route: "Oral", freq: "SOS (Max 1 daily for distress)", duration: "2 weeks", instructions: "Take only during acute emotional crisis." }
      ],
      followupDate: "2025-07-02",
      digitalSignature: "Dr. R. Sharma",
      notes: "Crisis evaluation. High emotional volatility following relationship trigger. Agreed to safety plan and weekly DBT."
    },
    {
      id: "rx-28",
      patientId: "pat-10",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-04",
      diagnosis: "Borderline personality disorder (ICD-10: F60.3)",
      medicines: [
        { name: "Quetiapine", strength: "25 mg", route: "Oral", freq: "SOS (Max 1 daily for distress)", duration: "2 weeks", instructions: "For crisis management." }
      ],
      followupDate: "2025-06-18",
      digitalSignature: "Dr. R. Sharma",
      notes: "Follow-up. Emotional volatility tracking. Boundary setting exercises reviewed."
    },
    {
      id: "rx-29",
      patientId: "pat-10",
      doctorName: "Dr. Riya Sharma",
      date: "2025-05-21",
      diagnosis: "Borderline personality disorder (ICD-10: F60.3)",
      medicines: [
        { name: "Quetiapine", strength: "25 mg", route: "Oral", freq: "SOS (Max 1 daily for distress)", duration: "2 weeks", instructions: "For acute crisis control." }
      ],
      followupDate: "2025-06-04",
      digitalSignature: "Dr. R. Sharma",
      notes: "Initial consultation. Presented with chronic emptiness, labile affect, self-harm impulses. Referred for comprehensive DBT program."
    }
  ],

  notifications: [
    { id: "notif-1", patientId: "pat-1", text: "PHQ-9 assessment assigned by Dr. Riya Sharma. Please complete before 30 June.", time: "Today, 09:05 AM", read: false },
    { id: "notif-2", patientId: "pat-1", text: "New prescription available. Escitalopram 10mg and Clonazepam 0.5mg added.", time: "Today, 09:00 AM", read: false },
    { id: "notif-3", patientId: "pat-1", text: "Appointment confirmed — Dr. Riya Sharma on 1 July 2025 at 10:00 AM.", time: "Today, 08:58 AM", read: true }
  ],

  queue: [
    { id: "q-1", token: "T01", patientId: "pat-1", apptType: "New Consultation", time: "09:00 AM", assessmentStatus: "Done", status: "Waiting", date: "2025-07-01" },
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

  activeConsultation: null,
  auditLogs: [],
  ndpsAuditLogs: []
};

// --- STATE MANAGER ---
class StateManager {
  constructor() {
    this.key = "saronil_health_state";
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

    if (!parsed) {
      parsed = JSON.parse(JSON.stringify(INITIAL_STATE));
      parsed.patients.forEach(p => {
        if (p.id === 'pat-1') p.riskTier = "Low-moderate risk";
        else if (p.id === 'pat-3') p.riskTier = "High risk";
        else if (p.id === 'pat-10') p.riskTier = "Moderate risk";
        else p.riskTier = "Low risk";
      });
    }

    // Shift 2025 mock dates dynamically to current date
    const has2025Dates = parsed.queue && parsed.queue.some(q => q.date && q.date.startsWith("2025"));
    if (has2025Dates) {
      const baseMockDate = new Date("2025-06-24");
      const actualToday = new Date();
      baseMockDate.setHours(12, 0, 0, 0);
      actualToday.setHours(12, 0, 0, 0);
      const offsetMs = actualToday.getTime() - baseMockDate.getTime();
      const offsetDays = Math.round(offsetMs / (1000 * 60 * 60 * 24));

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
        if (!q.date) {
          if (q.id === "q-1" || q.patientId === "pat-1") {
            q.date = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0];
          } else {
            q.date = new Date().toISOString().split('T')[0];
          }
          modified = true;
        }
      });
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

  reset() {
    localStorage.removeItem(this.key);
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
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
  }
};

// --- MOCK CONSTANTS ---
const ICD10_DIAGNOSES = [
  { code: "F32.0", name: "Depressive episode, mild" },
  { code: "F32.1", name: "Depressive episode, moderate" },
  { code: "F32.2", name: "Depressive episode, severe without psychotic symptoms" },
  { code: "F32.3", name: "Depressive episode, severe with psychotic symptoms" },
  { code: "F33.0", name: "Recurrent depressive disorder, current episode mild" },
  { code: "F33.1", name: "Recurrent depressive disorder, current episode moderate" },
  { code: "F33.2", name: "Recurrent depressive disorder, current episode severe without psychotic symptoms" },
  { code: "F41.1", name: "Generalised anxiety disorder" },
  { code: "F41.0", name: "Panic disorder" },
  { code: "F40.0", name: "Agoraphobia" },
  { code: "F40.1", name: "Social phobias" },
  { code: "F42",   name: "Obsessive-compulsive disorder" },
  { code: "F43.1", name: "Post-traumatic stress disorder" },
  { code: "F43.2", name: "Adjustment disorder" },
  { code: "F31.0", name: "Bipolar affective disorder, current episode hypomanic" },
  { code: "F31.3", name: "Bipolar affective disorder, current episode mild or moderate depression" },
  { code: "F31.5", name: "Bipolar affective disorder, current episode severe depression with psychotic symptoms" },
  { code: "F20.0", name: "Paranoid schizophrenia" },
  { code: "F20.9", name: "Schizophrenia, unspecified" },
  { code: "F25.0", name: "Schizoaffective disorder, manic type" },
  { code: "F25.1", name: "Schizoaffective disorder, depressive type" },
  { code: "F90.0", name: "Disturbance of activity and attention (ADHD)" },
  { code: "F10.2", name: "Alcohol dependence syndrome" },
  { code: "F10.1", name: "Harmful use of alcohol" },
  { code: "F11.2", name: "Opioid dependence" },
  { code: "F12.2", name: "Cannabis dependence" },
  { code: "F51.0", name: "Nonorganic insomnia" },
  { code: "F60.3", name: "Emotionally unstable (Borderline) personality disorder" },
  { code: "F60.0", name: "Paranoid personality disorder" },
  { code: "F06.3", name: "Organic mood disorder" },
  { code: "F06.7", name: "Mild cognitive disorder" },
  { code: "F00",   name: "Dementia in Alzheimer disease" },
  { code: "F50.0", name: "Anorexia nervosa" },
  { code: "F50.2", name: "Bulimia nervosa" },
  { code: "F84.0", name: "Childhood autism" },
  { code: "F70",   name: "Mild intellectual disability" },
  { code: "F45.1", name: "Undifferentiated somatoform disorder" },
  { code: "F30.1", name: "Mania without psychotic symptoms" }
];

const COMMON_MEDS = [
  { name: "Escitalopram", strengths: ["5 mg", "10 mg", "20 mg"], route: "Oral", defaultFreq: "Once daily, night (1-0-0)", defaultInst: "Take after food." },
  { name: "Sertraline", strengths: ["25 mg", "50 mg", "100 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with breakfast." },
  { name: "Fluoxetine", strengths: ["20 mg", "40 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with food." },
  { name: "Lithium carbonate", strengths: ["300 mg", "400 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Maintain consistent fluid intake. Periodic blood tests required." },
  { name: "Olanzapine", strengths: ["2.5 mg", "5 mg", "10 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "May cause drowsiness. Monitor weight." },
  { name: "Aripiprazole", strengths: ["5 mg", "10 mg", "15 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with or without food." },
  { name: "Clonazepam", strengths: ["0.25 mg", "0.5 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Short-term use only. Avoid alcohol." },
  { name: "Lorazepam", strengths: ["1 mg", "2 mg"], route: "Oral", defaultFreq: "Twice daily / SOS", defaultInst: "For acute anxiety. Avoid driving." },
  { name: "Methylphenidate", strengths: ["10 mg", "18 mg", "36 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take after breakfast. Avoid late doses." }
];

// Exporting core elements
window.SaronilState = store;
window.ASSESSMENT_SPECS = ASSESSMENT_SPECS;
window.ICD10_DIAGNOSES = ICD10_DIAGNOSES;
window.COMMON_MEDS = COMMON_MEDS;
