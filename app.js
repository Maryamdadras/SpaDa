/**
 * CIE ID MOBILE WEB APP PROTOTYPE
 * Interactive State Management, Wireframe Navigation & Bilingual Engine (IT / EN)
 * STEP 2: ASSISTENZA Screen & Reusable Contextual Help (?) Drawer
 */

// ============================================================================
// BILINGUAL LOCALIZATION DICTIONARY (IT / EN)
// ============================================================================
const i18nData = {
  it: {
    // Top Bar & Header
    menu_privacy: "Privacy Policy",
    menu_credits: "Crediti",
    greeting_title: "Ciao!",
    greeting_subtitle: "Scegli come accedere con la tua CIE",
    
    // Bottom Nav
    nav_gestione: "Gestione Carta",
    nav_home: "Home",
    nav_aiuto: "Aiuto e Recupero",
    popup_recupero_puk: "Recupero PUK",
    popup_recupero_puk_sub: "Sblocca o reimposta PIN",
    popup_assistenza_tutorial: "Assistenza & Tutorial",
    popup_assistenza_sub: "FAQ, contatti e video guide",

    // Home - Unregistered
    semplificato_title: "Accesso semplificato",
    semplificato_subtitle: "Accedi con credenziali CIE",
    semplificato_req_title: "Elenco di requisiti autenticazione 1 e 2 livello:",
    req_cf: "Codice Fiscale",
    req_pwd: "Password credenziali CIE",
    req_otp: "Codice temporaneo OTP (SMS o app CieID)",
    btn_accedi_credenziali: "Accedi con credenziali",

    completo_title: "Accesso completo",
    completo_subtitle: "con Carta d'Identità Elettronica (CIE)",
    completo_req_title: "Elenco di requisiti autenticazione 3 livello:",
    req_cie_fisica: "Carta CIE fisica con microchip",
    req_pin_8: "Codice PIN a 8 cifre (1ª e 2ª parte)",
    req_nfc: "Smartphone abilitato alla tecnologia NFC",
    btn_inizia_pin: "Inserisci PIN",

    // Home - Registered
    card_registered_badge: "CIE REGISTRATA & ATTIVA",
    registered_card_title: "Accesso completo",
    registered_card_sub: "con Carta d'Identità Elettronica (CIE)",
    btn_entra_qr: "Entra con QR code",
    btn_autentica_nfc: "Autentica con lettura NFC",
    security_notice: "Identità Digitale Ufficiale dello Stato Italiano",

    // Step 1: Inserisci PIN
    step_1_of_2: "Step 1 di 2",
    pin_screen_title: "INSERISCI PIN",
    pin_find_label: "Trovi il PIN diviso in due parti:",
    pin_part1: "• 4 cifre sono contenute nella ricevuta cartacea fornita durante il rilascio CIE",
    pin_part2: "• 4 cifre nella busta arrivata per posta insieme alla carta",
    pin_part_note: "(Oppure inserisci il tuo PIN personale, se lo hai modificato).",
    pin_recovery_prefix: "Hai perso o dimenticato il PIN?",
    pin_recovery_vai: "Vai a",
    pin_recovery_link: "'Gestione Carta'",
    btn_procedi: "Procedi",

    // Step 2: Lettura Carta
    step_2_of_2: "Step 2 di 2",
    nfc_screen_title: "LETTURA CARTA",
    nfc_reading_status: "Lasciala immobile: lettura in corso...",
    nfc_estimated_time: "Tempo stimato: 4 secondi",
    nfc_warning_callout: "Appoggia la carta sul retro, nella parte alta del telefono.",
    btn_simula_lettura: "Simula scansione NFC",

    // Success Screen
    success_header_title: "Registra carta",
    success_title: "Carta di Identità Elettronica registrata correttamente",
    level3_active_label: "ACCESSO LIVELLO 3 ATTIVO",
    success_level3_text: "La tua Carta di Identità Elettronica è ora attiva per l'accesso di Livello 3. Puoi accedere ai servizi online della Pubblica Amministrazione con lettura NFC o inquadrando il QR Code.",
    btn_torna_home: "Torna alla home",
    btn_configura: "Configura",

    // Gestione Carta Screen
    gestione_title: "GESTIONE CARTA",
    gestione_intro_text: "Gestisci la tua Carta di Identità Elettronica, sblocca la carta o reimposta i codici di sicurezza PIN e PUK.",
    status_active: "ATTIVA",
    lbl_numero_cie: "Numero Carta",
    lbl_intestatario: "Intestatario",
    lbl_scadenza: "Scadenza",
    btn_sblocca_carta: "Sblocca carta / Recupera PIN",
    btn_sblocca_carta_sub: "Usa il codice PUK se la carta è bloccata",
    btn_cambia_pin: "Cambia PIN",
    btn_cambia_pin_sub: "Modifica il tuo codice personale a 8 cifre",
    btn_recupero_puk: "Recupero PUK",
    btn_recupero_puk_sub: "Richiedi o recupera il tuo codice PUK",
    btn_elimina_carta: "Elimina carta dal dispositivo",
    btn_elimina_carta_sub: "Rimuove l'associazione con questo smartphone",
    need_help_faq: "Hai problemi con la carta? Consulta l'assistenza",

    // Assistenza Screen (Step 2 Requirements)
    assistenza_title: "ASSISTENZA",
    contact_intro: "Per assistenza sull'app CieID e sulle credenziali CIE puoi consultare la sezione Domande frequenti o contattaci ai seguenti canali:",
    faq_heading: "Domande frequenti:",
    
    // FAQ Items in exact Step 2 order
    faq_nfc_read: "Non riesco a leggere la carta",
    nfc_box_title: "Istruzioni di posizionamento:",
    nfc_box_desc: "Appoggia la Carta d'Identità Elettronica sul retro dello smartphone, nella parte alta (in corrispondenza dell'antenna NFC o del modulo fotocamera).",
    nfc_tip_1: "• Mantieni la carta immobile a contatto per almeno 4 secondi.",
    nfc_tip_2: "• Rimuovi custodie protettive spesse, anelli metallici o carte magnetiche.",
    nfc_tip_3: "• Verifica che la funzione NFC sia attiva nelle Impostazioni del telefono.",
    btn_tutorial_short: "[ Tutorial ]",
    btn_prova_lettura: "Prova lettura NFC",

    faq_new_pwd: "Come impostare una nuova password per le credenziali",
    faq_new_pwd_ans: "Se hai dimenticato la password, apri 'Accesso semplificato', tocca 'Recupera password' e inserisci il tuo Codice Fiscale. Riceverai un link di ripristino all'indirizzo email certificato associato alla tua CIE.",
    
    faq_pwd_expiring: "La password delle tue credenziali CIE sta per scadere",
    faq_pwd_expiring_ans: "La password delle credenziali di livello 1 e 2 ha una validità prefissata di sicurezza (180 giorni). Puoi rinnovarla direttamente da questa app nella sezione 'Gestione Credenziali' prima della data di scadenza.",
    
    faq_qr_access: "Come accedo tramite QR code",
    faq_qr_access_ans: "Sui portali della Pubblica Amministrazione seleziona 'Entra con CIE', scegli Livello 3 e inquadra con l'app CieID il codice QR a video. Conferma con il codice PIN o con il riconoscimento biometrico del tuo smartphone.",
    
    faq_puk_recover: "Come posso recuperare il PUK",
    faq_puk_recover_ans: "Il codice PUK è composto da 8 cifre: le prime 4 si trovano sul foglio di riepilogo cartaceo rilasciato dal Comune, mentre le seconde 4 si trovano nella lettera con cui è stata recapitata la carta. Se hai smarrito il PUK, tocca 'Aiuto e Recupero' e seleziona 'Recupero PUK'.",

    // Emergency Footer
    tag_blocco_bold: "BLOCCO CARTA 800 098 558",
    emergency_sub: "In caso di furto o smarrimento della CIE fisica",
    btn_consulta_guida: "[ Consulta la guida ]",

    // Contextual Help Drawer
    drawer_btn_assistenza: "Vai ad Assistenza completa",

    // PUK & Recovery Flow (Step 4 Requirements)
    sblocca_carta_title: "Sblocca carta",
    cambia_pin_title: "Cambia PIN",
    step_1: "Step 1",
    step_2: "Step 2",
    step_3: "Step 3",
    sblocca_puk_title: "INSERISCI IL CODICE PUK",
    puk_desc_title: "Il PUK è composto da:",
    puk_desc_1: "• 4 cifre fornite al momento della richiesta della Carta",
    puk_desc_2: "• 4 cifre fornite insieme alla Carta",
    puk_lost_question: "Hai perso o dimenticato il PUK?",
    puk_recuperalo_link: "Recuperalo",
    newpin_step2_title: "INSERISCI IL NUOVO PIN",
    repeatpin_step3_title: "RIPETI IL NUOVO PIN",
    repeatpin_subtitle_note: "Prendi nota e tieni al sicuro il nuovo codice PIN, sarà necessario per le prossime richieste di autenticazione",
    btn_procedi_lettura: "Procedi alla lettura",
    cambio_pin_success_title: "CAMBIO PIN ESEGUITO CON SUCCESSO.",
    cambio_pin_modal_desc: "Il nuovo codice PIN a 8 cifre è stato registrato ed è pronto per l'autenticazione con la tua CIE.",
    btn_torna_home_bracket: "[ Torna alla home ]",
    puk_recovery_modal_title: "Recupero Codice PUK",
    puk_recovery_modal_p1: "Il codice PUK è fondamentale per sbloccare la tua CIE in caso di inserimento errato del PIN per 3 volte.",
    puk_recovery_modal_tip_title: "Come recuperarlo:",
    puk_recovery_modal_tip_desc: "Se hai fornito un recapito email o PEC durante la richiesta della CIE al Comune, puoi richiedere il rinvio delle ultime 4 cifre del PUK tramite il portale ufficiale del Ministero dell'Interno.",
    puk_recovery_modal_p2: "Le prime 4 cifre restano sempre quelle riportate sulla prima pagina della ricevuta cartacea rilasciata dal Comune.",
    btn_vai_sblocca_puk: "Vai allo Sblocco Carta",

    // Modals & Tutorials
    tutorial_modal_title: "Tutorial: Lettura Carta CIE",
    tut_step1_title: "Individua l'antenna NFC",
    tut_step1_desc: "Sulla maggior parte degli smartphone, il sensore NFC si trova nella parte alta del retro, accanto alla fotocamera.",
    tut_step2_title: "Appoggia a contatto diretto",
    tut_step2_desc: "Fai aderire la Carta d'Identità Elettronica sul retro del telefono senza sollevare i bordi.",
    tut_step3_title: "Attendi 4 secondi senza muoverti",
    tut_step3_desc: "Una vibrazione e la barra di avanzamento confermeranno la lettura riuscita del certificato.",
    btn_prova_subito: "Prova subito la lettura NFC",

    modal_privacy_title: "Informativa sulla Privacy",
    modal_privacy_p1: "Cie ID tutela la riservatezza e la sicurezza dei dati personali dei cittadini in conformità al Regolamento UE 2016/679 (GDPR).",
    modal_privacy_p2: "I dati di autenticazione, il certificato digitale e il PIN risiedono esclusivamente nel chip sicuro della Carta d'Identità Elettronica e nell'enclave sicura del dispositivo.",
    modal_privacy_p3: "Nessun dato biometrico o codice PIN viene trasmesso a server centrali durante l'accesso.",
    btn_chiudi: "Chiudi",
    btn_ho_capito: "Ho capito",

    modal_credits_title: "Crediti",
    modal_credits_header: "Cie ID Mobile Redesign",
    modal_credits_subtitle: "Prototipo interattivo basato sulle specifiche di design Balsamiq Wireframes.",
    modal_credits_org: "Ministero dell'Interno & Istituto Poligrafico e Zecca dello Stato (IPZS)",
    modal_credits_ver: "Versione 2.4.0 (Redesign 2026)",

    qr_modal_title: "Inquadra il QR Code",
    qr_caption: "Inquadra il codice QR visualizzato sul portale istituzionale",
    btn_simula_scansione: "Simula scansione QR riuscita",

    notif_title: "Notifiche e Avvisi",
    notif_item1_title: "Nuovo accesso completato",
    notif_item1_desc: "Accesso effettuato al portale INPS con successo alle ore 09:15.",
    notif_item1_time: "Oggi, 09:15",
    notif_item2_title: "Certificato CIE valido",
    notif_item2_desc: "La tua CIE scadrà regolarmente il 28/05/2032.",
    notif_item2_time: "Ieri",

    semplificato_login_title: "Accesso con credenziali CIE",
    lbl_cf: "Codice Fiscale",
    lbl_pwd: "Password credenziali",
    btn_invia_otp: "Richiedi OTP e Accedi",

    guide_title: "Guida al codice PIN",
    guide_subtitle: "Composizione del PIN:",
    guide_p1: "Il codice PIN completo è composto da 8 cifre:",
    guide_part1: "• Prima parte (4 cifre): consegnata di persona presso l'ufficio anagrafe del Comune durante la richiesta della CIE.",
    guide_part2: "• Seconda parte (4 cifre): contenuta all'interno della busta sigillata recapitata per posta insieme alla tessera.",
    guide_note: "Puoi modificare il PIN in qualsiasi momento dalla sezione Gestione Carta.",

    // Toolbar & Controls
    proto_label_state: "Stato Home:",
    state_opt_unreg: "Non registrata (Default)",
    state_opt_reg: "Carta Registrata (Configurata)",
    btn_reset: "Reset",

    // Presenter Quick-Jump Bar
    presenter_badge: "EXAM DEMO",
    presenter_title: "Presenter Jump Menu",
    presenter_collapse: "Comprimi",
    presenter_expand: "Espandi",
    flow_a_title: "Home & Navigazione",
    flow_a_desc: "Esplorazione menu (⋮), accordion e centro assistenza",
    btn_jump_flow_a: "Avvia Flow A",
    chip_home_unreg: "Home (Default)",
    chip_accordion_semplice: "Accordion 1",
    chip_accordion_completo: "Accordion 2",
    chip_assistenza: "Assistenza & FAQ",
    chip_help_drawer: "Aiuto (?)",
    flow_b_title: "PIN Dimenticato & Recupero",
    flow_b_desc: "PIN -> Link Gestione -> PUK -> Nuovo PIN -> NFC 4s -> Successo",
    btn_jump_flow_b: "Avvia Flow B",
    btn_autoplay_flow_b: "Auto-Play Flow B",
    chip_link_gestione: "1. Link Gestione",
    chip_gestione_carta: "2. Gestione Carta",
    chip_puk_step1: "3. Step 1 (PUK)",
    chip_puk_step2: "4. Step 2 (Nuovo PIN)",
    chip_puk_step3: "5. Step 3 (Ripeti PIN)",
    chip_puk_step4: "6. Step 4 (NFC & Modal)",
    flow_c_title: "Registrazione Carta Diretta",
    flow_c_desc: "Inserisci PIN (Step 1) -> Lettura NFC 4s (Step 2) -> CIE Attiva",
    btn_jump_flow_c: "Avvia Flow C",
    btn_autoplay_flow_c: "Auto-Play Flow C",
    chip_reg_step1: "1. Step 1 di 2 (PIN)",
    chip_reg_step2: "2. Step 2 di 2 (NFC)",
    chip_reg_success: "3. Successo Registrazione",
    chip_reg_home: "4. Home con CIE Attiva"
  },

  en: {
    // Top Bar & Header
    menu_privacy: "Privacy Policy",
    menu_credits: "Credits",
    greeting_title: "Hello!",
    greeting_subtitle: "Choose how to log in with your CIE",
    
    // Bottom Nav
    nav_gestione: "Card Management",
    nav_home: "Home",
    nav_aiuto: "Help & Recovery",
    popup_recupero_puk: "PUK Recovery",
    popup_recupero_puk_sub: "Unlock or reset PIN",
    popup_assistenza_tutorial: "Help & Tutorials",
    popup_assistenza_sub: "FAQ, contacts and video guides",

    // Home - Unregistered
    semplificato_title: "Simplified Access",
    semplificato_subtitle: "Log in with CIE credentials",
    semplificato_req_title: "Level 1 & 2 authentication requirements:",
    req_cf: "Italian Tax Code (Codice Fiscale)",
    req_pwd: "CIE credentials password",
    req_otp: "Temporary OTP code (SMS or CieID app)",
    btn_accedi_credenziali: "Log in with credentials",

    completo_title: "Full Access with CIE Card",
    completo_subtitle: "with Electronic ID Card (CIE)",
    completo_req_title: "Level 3 authentication requirements:",
    req_cie_fisica: "Physical CIE card with microchip",
    req_pin_8: "8-digit PIN code (Part 1 and 2)",
    req_nfc: "Smartphone equipped with NFC sensor",
    btn_inizia_pin: "Enter 8-digit PIN",

    // Home - Registered
    card_registered_badge: "CIE REGISTERED & ACTIVE",
    registered_card_title: "Full Access with CIE Card",
    registered_card_sub: "with Electronic ID Card (CIE)",
    btn_entra_qr: "Log in with QR code",
    btn_autentica_nfc: "Authenticate via NFC scan",
    security_notice: "Official Digital Identity of the Italian Republic",

    // Step 1: Inserisci PIN
    step_1_of_2: "Step 1 of 2",
    pin_screen_title: "ENTER 8-DIGIT PIN",
    pin_find_label: "Your PIN is delivered in two parts:",
    pin_part1: "• 4 digits are contained in the paper receipt provided during CIE release",
    pin_part2: "• 4 digits in the envelope delivered by mail with the card",
    pin_part_note: "(Or enter your personal PIN, if you have changed it).",
    pin_recovery_prefix: "Lost or forgot your PIN?",
    pin_recovery_vai: "Go to",
    pin_recovery_link: "'Card Management'",
    btn_procedi: "Proceed",

    // Step 2: Lettura Carta
    step_2_of_2: "Step 2 of 2",
    nfc_screen_title: "CARD SCAN",
    nfc_reading_status: "Hold it steady: reading in progress...",
    nfc_estimated_time: "Estimated time: 4 seconds",
    nfc_warning_callout: "Place the card on the back, on the upper part of the phone.",
    btn_simula_lettura: "Simulate NFC scan",

    // Success Screen
    success_header_title: "Register card",
    success_title: "Electronic ID Card registered successfully",
    level3_active_label: "LEVEL 3 ACCESS ACTIVE",
    success_level3_text: "Your Electronic Identity Card is now active for Level 3 access. You can access Public Administration online services via NFC scan or by scanning the QR Code.",
    btn_torna_home: "Back to home",
    btn_configura: "Configure",

    // Gestione Carta Screen
    gestione_title: "CARD MANAGEMENT",
    gestione_intro_text: "Manage your Electronic Identity Card, unlock the card or reset your PIN and PUK security codes.",
    status_active: "ACTIVE",
    lbl_numero_cie: "Card Number",
    lbl_intestatario: "Cardholder",
    lbl_scadenza: "Expiry",
    btn_sblocca_carta: "Unlock Card / Recover PIN",
    btn_sblocca_carta_sub: "Use PUK code if the card is locked",
    btn_cambia_pin: "Change PIN",
    btn_cambia_pin_sub: "Modify your personal 8-digit code",
    btn_recupero_puk: "PUK Recovery",
    btn_recupero_puk_sub: "Request or recover your PUK code",
    btn_elimina_carta: "Remove Card from Device",
    btn_elimina_carta_sub: "Unlinks card from this smartphone",
    need_help_faq: "Having trouble? Visit Help & FAQ",

    // Assistenza Screen (Step 2 Requirements)
    assistenza_title: "SUPPORT & HELP",
    contact_intro: "For assistance with the CieID app and CIE credentials, check the FAQ or contact us through:",
    faq_heading: "Frequently Asked Questions:",
    
    // FAQ Items in exact Step 2 order
    faq_nfc_read: "Card scan is not working",
    nfc_box_title: "Positioning instructions:",
    nfc_box_desc: "Rest the Electronic ID Card against the upper back of the smartphone (near the NFC antenna or camera module).",
    nfc_tip_1: "• Hold the card steady flush against the phone for at least 4 seconds.",
    nfc_tip_2: "• Remove thick cases, metal rings, or magnetic cards.",
    nfc_tip_3: "• Check that NFC is turned ON in phone settings.",
    btn_tutorial_short: "[ Tutorial ]",
    btn_prova_lettura: "Test NFC Scan",

    faq_new_pwd: "How to set a new password for credentials",
    faq_new_pwd_ans: "If forgotten, go to 'Simplified access', tap 'Forgot password' and enter your Tax Code to receive a secure recovery email.",
    
    faq_pwd_expiring: "Your CIE credentials password is expiring",
    faq_pwd_expiring_ans: "Level 1 and 2 passwords have security expirations (180 days). You can renew it directly in the app before it expires.",
    
    faq_qr_access: "How do I log in via QR code",
    faq_qr_access_ans: "On institutional websites choose 'Entra con CIE', select Level 3 and scan the displayed QR code with the CieID app. Confirm with your PIN or biometrics.",
    
    faq_puk_recover: "How can I recover my PUK code",
    faq_puk_recover_ans: "The PUK code is 8 digits: first 4 on paper receipt from municipality, second 4 in postal envelope. Use 'PUK Recovery' in the app if lost.",

    // Emergency Footer
    tag_blocco_bold: "BLOCK CARD 800 098 558",
    emergency_sub: "In case of theft or loss of physical CIE",
    btn_consulta_guida: "[ View Guide ]",

    // Contextual Help Drawer
    drawer_btn_assistenza: "Go to Full Help & Support",

    // PUK & Recovery Flow (Step 4 Requirements)
    sblocca_carta_title: "Unlock Card",
    cambia_pin_title: "Change PIN",
    step_1: "Step 1",
    step_2: "Step 2",
    step_3: "Step 3",
    sblocca_puk_title: "ENTER PUK CODE",
    puk_desc_title: "The PUK consists of:",
    puk_desc_1: "• 4 digits provided when requesting the Card",
    puk_desc_2: "• 4 digits provided together with the Card",
    puk_lost_question: "Lost or forgot your PUK?",
    puk_recuperalo_link: "Recover it",
    newpin_step2_title: "ENTER NEW PIN",
    repeatpin_step3_title: "REPEAT NEW PIN",
    repeatpin_subtitle_note: "Take note and keep the new PIN code safe, it will be needed for future authentication requests",
    btn_procedi_lettura: "Proceed to card read",
    cambio_pin_success_title: "PIN CHANGED SUCCESSFULLY.",
    cambio_pin_modal_desc: "The new 8-digit PIN code has been registered and is ready for authentication with your CIE.",
    btn_torna_home_bracket: "[ Back to home ]",
    puk_recovery_modal_title: "PUK Code Recovery",
    puk_recovery_modal_p1: "The PUK code is essential to unlock your CIE if you enter the wrong PIN 3 times.",
    puk_recovery_modal_tip_title: "How to recover it:",
    puk_recovery_modal_tip_desc: "If you provided an email or PEC address when requesting the CIE at the Municipality, you can request the second 4 digits via the official Ministry of Interior portal.",
    puk_recovery_modal_p2: "The first 4 digits are always those written on the paper receipt issued by the Municipality.",
    btn_vai_sblocca_puk: "Go to Card Unlock",

    // Modals & Tutorials
    tutorial_modal_title: "Tutorial: CIE Card Reading",
    tut_step1_title: "Locate the NFC Antenna",
    tut_step1_desc: "On most phones, the NFC sensor is at the top rear, near the camera.",
    tut_step2_title: "Rest flush against device",
    tut_step2_desc: "Hold the Electronic ID Card flat against the back without lifting edges.",
    tut_step3_title: "Wait 4 seconds without moving",
    tut_step3_desc: "A vibration and progress bar will confirm successful reading.",
    btn_prova_subito: "Try NFC Reading Now",

    modal_privacy_title: "Privacy Notice",
    modal_privacy_p1: "Cie ID safeguards the privacy and security of citizens' personal data in compliance with EU Regulation 2016/679 (GDPR).",
    modal_privacy_p2: "Authentication data, digital certificates and the PIN reside exclusively on the secure chip of the CIE and in the device's secure enclave.",
    modal_privacy_p3: "No biometric data or PIN code is ever transmitted to central servers during login.",
    btn_chiudi: "Close",
    btn_ho_capito: "Understood",

    modal_credits_title: "Credits",
    modal_credits_header: "Cie ID Mobile Redesign",
    modal_credits_subtitle: "Interactive prototype based on Balsamiq Wireframes design specifications.",
    modal_credits_org: "Ministry of Interior & State Printing House and Mint (IPZS)",
    modal_credits_ver: "Version 2.4.0 (Redesign 2026)",

    qr_modal_title: "Scan QR Code",
    qr_caption: "Align the camera with the QR code on the portal",
    btn_simula_scansione: "Simulate successful QR scan",

    notif_title: "Notifications & Alerts",
    notif_item1_title: "New login completed",
    notif_item1_desc: "Successful login to the INPS portal at 09:15 AM.",
    notif_item1_time: "Today, 09:15 AM",
    notif_item2_title: "CIE certificate valid",
    notif_item2_desc: "Your CIE will expire on schedule on 28/05/2032.",
    notif_item2_time: "Yesterday",

    semplificato_login_title: "Log in with CIE credentials",
    lbl_cf: "Tax Code (Codice Fiscale)",
    lbl_pwd: "Password",
    btn_invia_otp: "Request OTP & Log In",

    guide_title: "PIN Code Guide",
    guide_subtitle: "PIN Composition:",
    guide_p1: "The complete PIN code consists of 8 digits:",
    guide_part1: "• Part one (4 digits): delivered in person at the municipality civil registry during the CIE request.",
    guide_part2: "• Part two (4 digits): contained in the sealed envelope delivered by mail with the card.",
    guide_note: "You can change your PIN at any time from the Card Management section.",

    // Toolbar & Controls
    proto_label_state: "Home State:",
    state_opt_unreg: "Unregistered (Default)",
    state_opt_reg: "Card Registered (Active)",
    btn_reset: "Reset",

    // Presenter Quick-Jump Bar
    presenter_badge: "EXAM DEMO",
    presenter_title: "Presenter Jump Menu",
    presenter_collapse: "Collapse",
    presenter_expand: "Expand",
    flow_a_title: "Home & Navigation",
    flow_a_desc: "Explore menus (⋮), accordions and help center",
    btn_jump_flow_a: "Start Flow A",
    chip_home_unreg: "Home (Default)",
    chip_accordion_semplice: "Accordion 1",
    chip_accordion_completo: "Accordion 2",
    chip_assistenza: "Help & FAQ",
    chip_help_drawer: "Help (?)",
    flow_b_title: "Forgotten PIN & Recovery",
    flow_b_desc: "PIN -> Manage Link -> PUK -> New PIN -> NFC 4s -> Success",
    btn_jump_flow_b: "Start Flow B",
    btn_autoplay_flow_b: "Auto-Play Flow B",
    chip_link_gestione: "1. Manage Link",
    chip_gestione_carta: "2. Card Management",
    chip_puk_step1: "3. Step 1 (PUK)",
    chip_puk_step2: "4. Step 2 (New PIN)",
    chip_puk_step3: "5. Step 3 (Repeat PIN)",
    chip_puk_step4: "6. Step 4 (NFC & Modal)",
    flow_c_title: "Direct Card Registration",
    flow_c_desc: "Enter PIN (Step 1) -> NFC Read 4s (Step 2) -> Active CIE",
    btn_jump_flow_c: "Start Flow C",
    btn_autoplay_flow_c: "Auto-Play Flow C",
    chip_reg_step1: "1. Step 1 of 2 (PIN)",
    chip_reg_step2: "2. Step 2 of 2 (NFC)",
    chip_reg_success: "3. Registration Success",
    chip_reg_home: "4. Home with Active CIE"
  }
};

// ============================================================================
// APPLICATION STATE & NAVIGATION HISTORY
// ============================================================================
const state = {
  currentLang: 'it',
  homeState: 'unregistered', // 'unregistered' | 'registered'
  currentScreen: 'screen-home',
  historyStack: [], // Array of screen IDs for back navigation
  currentHelpContext: null,
  pinDigits: [],
  pukDigits: [],
  newPinDigits: [],
  repeatPinDigits: [],
  pukCurrentStep: 1, // 1: PUK, 2: New PIN, 3: Repeat PIN, 4: NFC Scan
  pukOrigin: 'sblocca', // 'sblocca' | 'cambiapin'
  nfcInterval: null,
  pukNfcInterval: null,
  autoPlayTimers: []
};

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateHomeStateUI();
  updatePinBoxesUI();
  updatePukBoxesUI();
  updateNewPinBoxesUI();
  updateRepeatPinBoxesUI();

  // Close dropdown or popups on outside click
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('dropdown-menu');
    const menuBtn = document.getElementById('menu-dots-btn');
    if (dropdown && !dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
      dropdown.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    }

    const aiutoPopup = document.getElementById('aiuto-popup-menu');
    const aiutoBtn = document.getElementById('nav-aiuto-btn');
    if (aiutoPopup && !aiutoPopup.contains(e.target) && !aiutoBtn.contains(e.target)) {
      aiutoPopup.classList.remove('show');
      aiutoBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Keyboard navigation for PIN & PUK typing
  document.addEventListener('keydown', (e) => {
    if (state.currentScreen === 'screen-pin') {
      if (e.key >= '0' && e.key <= '9') {
        pressPinKey(e.key);
      } else if (e.key === 'Backspace') {
        deletePinKey();
      } else if (e.key === 'Enter' && state.pinDigits.length === 8) {
        submitPin();
      }
    } else if (state.currentScreen === 'screen-puk') {
      if (state.pukCurrentStep === 1) {
        if (e.key >= '0' && e.key <= '9') {
          pressPukKey(e.key);
        } else if (e.key === 'Backspace') {
          deletePukKey();
        } else if (e.key === 'Enter' && state.pukDigits.length === 8) {
          goToPukStep2();
        }
      } else if (state.pukCurrentStep === 2) {
        if (e.key >= '0' && e.key <= '9') {
          pressNewPinKey(e.key);
        } else if (e.key === 'Backspace') {
          deleteNewPinKey();
        } else if (e.key === 'Enter' && state.newPinDigits.length === 8) {
          goToPukStep3();
        }
      } else if (state.pukCurrentStep === 3) {
        if (e.key >= '0' && e.key <= '9') {
          pressRepeatPinKey(e.key);
        } else if (e.key === 'Backspace') {
          deleteRepeatPinKey();
        } else if (e.key === 'Enter' && state.repeatPinDigits.length === 8) {
          goToPukNfcScan();
        }
      }
    }
  });
});

// ============================================================================
// SCREEN NAVIGATION & HISTORY ROUTING
// ============================================================================
function navigateTo(screenId, pushHistory = true) {
  if (pushHistory && state.currentScreen && state.currentScreen !== screenId) {
    state.historyStack.push(state.currentScreen);
  }

  // Hide all screens
  const allScreens = document.querySelectorAll('.screen-view');
  allScreens.forEach(scr => scr.classList.remove('active'));

  // Show target screen
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    state.currentScreen = screenId;
  }

  // Scroll viewport to top
  const scrollContainer = document.getElementById('screen-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // Update Bottom Nav active indicator
  updateBottomNavActive(screenId);

  // Close any open popups/menus
  closeAllOverlays();
}

function navigateBack() {
  if (state.historyStack.length > 0) {
    const previousScreen = state.historyStack.pop();
    navigateTo(previousScreen, false);
  } else {
    navigateTo('screen-home', false);
  }
}

function updateBottomNavActive(screenId) {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  if (screenId === 'screen-home' || screenId === 'screen-pin' || screenId === 'screen-nfc' || screenId === 'screen-success') {
    const homeTab = document.getElementById('nav-home');
    if (homeTab) homeTab.classList.add('active');
  } else if (screenId === 'screen-gestione') {
    const gestioneTab = document.getElementById('nav-gestione');
    if (gestioneTab) gestioneTab.classList.add('active');
  } else if (screenId === 'screen-assistenza' || screenId === 'screen-puk') {
    const aiutoBtn = document.getElementById('nav-aiuto-btn');
    if (aiutoBtn) aiutoBtn.classList.add('active');
  }
}

// ============================================================================
// REUSABLE CONTEXTUAL HELP (?) DRAWER ENGINE
// ============================================================================
function openContextualHelp(contextOverride) {
  // Determine context if not passed
  let ctx = contextOverride;
  if (!ctx) {
    if (state.currentScreen === 'screen-pin') ctx = 'pin';
    else if (state.currentScreen === 'screen-nfc') ctx = 'nfc';
    else if (state.currentScreen === 'screen-puk') {
      if (state.pukCurrentStep === 1) ctx = 'puk';
      else if (state.pukCurrentStep === 2 || state.pukCurrentStep === 3) ctx = 'changepin';
      else ctx = 'nfc';
    } else if (state.currentScreen === 'screen-gestione') ctx = 'gestione';
    else if (state.currentScreen === 'screen-assistenza') ctx = 'assistenza';
    else ctx = 'general';
  }

  state.currentHelpContext = ctx;
  renderContextualHelpContent(ctx);

  const drawer = document.getElementById('help-drawer');
  const overlay = document.getElementById('help-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeContextualHelp() {
  const drawer = document.getElementById('help-drawer');
  const overlay = document.getElementById('help-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
  // Progress in current task (typed digits) remains fully intact!
}

function goToAssistenzaFromContext() {
  closeContextualHelp();
  navigateTo('screen-assistenza');
}

function renderContextualHelpContent(context) {
  const isIt = state.currentLang === 'it';
  const tagEl = document.getElementById('help-drawer-tag');
  const titleEl = document.getElementById('help-drawer-title');
  const contentEl = document.getElementById('help-drawer-content');
  if (!contentEl) return;

  if (context === 'pin') {
    if (tagEl) tagEl.textContent = isIt ? 'STEP 1 DI 2' : 'STEP 1 OF 2';
    if (titleEl) titleEl.textContent = isIt ? 'Inserimento Codice PIN' : 'Entering PIN Code';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        <strong>${isIt ? 'Composizione del codice:' : 'Code composition:'}</strong>
        ${isIt 
          ? 'Il PIN è composto da <strong>8 cifre numeriche</strong> (4 cifre della ricevuta cartacea + 4 cifre della busta postale).'
          : 'The PIN consists of <strong>8 numeric digits</strong> (4 digits from paper receipt + 4 digits from postal envelope).'}
      </div>

      <div class="help-steps-list">
        <div class="help-step-item">
          <span class="help-step-badge">1</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Prima parte (4 cifre)' : 'First part (4 digits)'}</strong>
            <p>${isIt ? 'Controlla la ricevuta rilasciata dal Comune al momento della richiesta.' : 'Check the paper receipt given by the municipality during request.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">2</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Seconda parte (4 cifre)' : 'Second part (4 digits)'}</strong>
            <p>${isIt ? 'Controlla la lettera sigillata contenente la carta CIE ricevuta per posta.' : 'Check the postal letter delivered with your physical CIE card.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">!</span>
          <div class="help-step-body">
            <strong style="color: var(--status-danger);">${isIt ? 'Attenzione ai tentativi errati' : 'Warning on failed attempts'}</strong>
            <p>${isIt ? 'Dopo <strong>3 tentativi consecutivi errati</strong>, la carta si blocca e sarà necessario il codice PUK per riattivarla.' : 'After <strong>3 consecutive failed attempts</strong>, the card locks and PUK will be required.'}</p>
          </div>
        </div>
      </div>

      <details class="help-faq-quick">
        <summary>${isIt ? 'Non trovi la seconda parte del PIN?' : 'Cannot find second part of PIN?'}</summary>
        <p>${isIt 
          ? 'Puoi sbloccare la carta e impostare un nuovo PIN a 8 cifre usando la funzione "Recupero PUK" nella sezione Aiuto.'
          : 'You can reset your PIN with the "PUK Recovery" feature in the Help section.'}</p>
      </details>

      <button type="button" class="btn btn-sm btn-secondary w-full mt-2" onclick="fillDemoPin(); closeContextualHelp();">
        ${isIt ? 'Compila con PIN di prova (DEMO)' : 'Fill with test PIN (DEMO)'}
      </button>
    `;
  } else if (context === 'nfc') {
    if (tagEl) tagEl.textContent = isIt ? 'STEP 2 DI 2' : 'STEP 2 OF 2';
    if (titleEl) titleEl.textContent = isIt ? 'Lettura Carta via NFC' : 'NFC Card Reading';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        <strong>${isIt ? 'Come posizionare la CIE:' : 'How to place the CIE:'}</strong>
        ${isIt 
          ? 'Appoggia la carta a diretto contatto con il <strong>retro dello smartphone, nella parte superiore</strong> (vicino alla fotocamera).'
          : 'Rest the card flush against the <strong>top back of the smartphone</strong> (near the camera sensor).'}
      </div>

      <div class="help-steps-list">
        <div class="help-step-item">
          <span class="help-step-badge">1</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Tieni la carta immobile' : 'Hold card steady'}</strong>
            <p>${isIt ? 'Non muovere la carta per almeno <strong>4 secondi</strong> fino al completamento.' : 'Do not move the card for at least <strong>4 seconds</strong>.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">2</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Rimuovi cover e metallo' : 'Remove cases & metal'}</strong>
            <p>${isIt ? 'Custodie spesse, anelli metallici o placche magnetiche interferiscono con l\'antenna NFC.' : 'Thick cases or metal plates can block NFC transmission.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">3</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Attiva NFC nelle Impostazioni' : 'Enable NFC in Settings'}</strong>
            <p>${isIt ? 'Verifica che l\'NFC sia abilitato nelle impostazioni di connessione dello smartphone.' : 'Ensure NFC toggle is turned on in device settings.'}</p>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-sm btn-primary w-full mt-2" onclick="closeContextualHelp(); openModal('tutorial-modal');">
        ${isIt ? 'Guarda il Tutorial Video/Animato' : 'Watch Animated Tutorial'}
      </button>
    `;
  } else if (context === 'puk') {
    if (tagEl) tagEl.textContent = isIt ? 'SBLOCCO CARTA' : 'CARD UNLOCK';
    if (titleEl) titleEl.textContent = isIt ? 'Codice PUK & Sblocco' : 'PUK Code & Unlock';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        <strong>${isIt ? 'A cosa serve il PUK:' : 'What PUK is for:'}</strong>
        ${isIt 
          ? 'Il PUK (8 cifre) consente di sbloccare la carta bloccata per PIN errato e impostare un nuovo PIN a 8 cifre.'
          : 'The PUK (8 digits) unlocks a blocked card and lets you set a brand new 8-digit PIN.'}
      </div>

      <div class="help-steps-list">
        <div class="help-step-item">
          <span class="help-step-badge">1</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Prima parte (4 cifre)' : 'First 4 digits'}</strong>
            <p>${isIt ? 'Fornite al momento della richiesta della Carta presso gli uffici comunali.' : 'Given during request at city hall.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">2</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Seconda parte (4 cifre)' : 'Second 4 digits'}</strong>
            <p>${isIt ? 'Presenti nella busta postale di consegna della tessera CIE.' : 'Included in the envelope with the card.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">!</span>
          <div class="help-step-body">
            <strong style="color: var(--status-danger);">${isIt ? 'Limite 10 tentativi' : '10 attempts limit'}</strong>
            <p>${isIt ? 'Se inserisci il PUK errato per 10 volte, il chip della CIE viene bloccato irreversibilmente.' : 'Entering wrong PUK 10 times permanently locks the chip.'}</p>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-sm btn-secondary w-full mt-2" onclick="fillDemoPuk(); closeContextualHelp();">
        ${isIt ? 'Compila con PUK di prova (DEMO)' : 'Fill with test PUK (DEMO)'}
      </button>
    `;
  } else if (context === 'changepin') {
    if (tagEl) tagEl.textContent = isIt ? 'CAMBIO PIN' : 'CHANGE PIN';
    if (titleEl) titleEl.textContent = isIt ? 'Nuovo Codice PIN' : 'New PIN Code';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        <strong>${isIt ? 'Scelta del nuovo PIN:' : 'Choosing new PIN:'}</strong>
        ${isIt 
          ? 'Il nuovo PIN deve essere composto da <strong>8 cifre numeriche</strong> personali e riservate.'
          : 'The new PIN must consist of <strong>8 personal numeric digits</strong> kept strictly confidential.'}
      </div>

      <div class="help-steps-list">
        <div class="help-step-item">
          <span class="help-step-badge">1</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Sicurezza del codice' : 'Code security'}</strong>
            <p>${isIt ? 'Non usare sequenze ovvie (12345678, 00000000) o la tua data di nascita.' : 'Avoid obvious sequences (12345678, 00000000) or your birth date.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">2</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Conferma del PIN' : 'Confirm PIN'}</strong>
            <p>${isIt ? 'Allo Step 3 dovrai digitare di nuovo lo stesso PIN per confermare la correttezza.' : 'In Step 3 you will type the identical PIN to verify.'}</p>
          </div>
        </div>
        <div class="help-step-item">
          <span class="help-step-badge">3</span>
          <div class="help-step-body">
            <strong>${isIt ? 'Aggiornamento sul chip' : 'Chip update'}</strong>
            <p>${isIt ? 'Infine appoggerai la carta sul retro per memorizzare il nuovo PIN.' : 'Finally hold your card on the back to write the new PIN to chip.'}</p>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-sm btn-secondary w-full mt-2" onclick="fillDemoNewPin(); fillDemoRepeatPin(); closeContextualHelp();">
        ${isIt ? 'Compila con PIN di prova (DEMO)' : 'Fill with test PIN (DEMO)'}
      </button>
    `;
  } else if (context === 'gestione') {
    if (tagEl) tagEl.textContent = isIt ? 'CONFIGURAZIONE' : 'CONFIGURATION';
    if (titleEl) titleEl.textContent = isIt ? 'Gestione della Carta' : 'Card Management';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        ${isIt 
          ? 'In questa schermata puoi visualizzare i dati della CIE registrata su questo dispositivo, cambiare il PIN personale a 8 cifre o rimuovere l\'associazione.'
          : 'Manage your linked CIE card, change your personal 8-digit PIN, or unlink the card from this phone.'}
      </div>
      <p class="text-sm text-muted">
        ${isIt 
          ? 'La rimozione della carta dal dispositivo non revoca la tua identità: potrai registrarla nuovamente in qualsiasi momento.'
          : 'Removing the card from this phone does not revoke your identity: you can register it again anytime.'}
      </p>
    `;
  } else {
    if (tagEl) tagEl.textContent = isIt ? 'SUPPORTO' : 'SUPPORT';
    if (titleEl) titleEl.textContent = isIt ? 'Assistenza Cie ID' : 'Cie ID Help';

    contentEl.innerHTML = `
      <div class="help-card-tip">
        ${isIt 
          ? 'Hai domande o riscontri anomalie? Puoi consultare le FAQ complete o contattare il Ministero dell\'Interno.'
          : 'Questions or issues? Check full FAQ or contact the Ministry of the Interior.'}
      </div>
      <p class="text-sm">
        ${isIt ? 'Numero Verde Blocco Carta: <strong>800 098 558</strong>' : 'Card Block Hotline: <strong>800 098 558</strong>'}
      </p>
    `;
  }
}

// ============================================================================
// TOP BAR INTERACTIONS: THREE DOTS & LANGUAGE
// ============================================================================
function toggleDropdownMenu(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('dropdown-menu');
  const btn = document.getElementById('menu-dots-btn');
  const isOpen = menu.classList.toggle('show');
  btn.setAttribute('aria-expanded', String(isOpen));

  // Close other popups
  document.getElementById('aiuto-popup-menu')?.classList.remove('show');
}

function toggleLanguage() {
  state.currentLang = state.currentLang === 'it' ? 'en' : 'it';
  applyTranslations();
  if (state.currentHelpContext) {
    renderContextualHelpContent(state.currentHelpContext);
  }
  showToast(state.currentLang === 'it' ? 'Lingua impostata: Italiano' : 'Language set: English');
}

function applyTranslations() {
  const lang = state.currentLang;
  const dict = i18nData[lang];

  document.documentElement.lang = lang;

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update dynamic recovery header title if present
  const recoveryHeaderTitle = document.getElementById('recovery-header-title');
  if (recoveryHeaderTitle) {
    if (state.pukCurrentStep === 1 && state.pukOrigin !== 'cambiapin') {
      recoveryHeaderTitle.textContent = dict.sblocca_carta_title;
    } else {
      recoveryHeaderTitle.textContent = dict.cambia_pin_title;
    }
  }

  // Update presenter collapse/expand label
  const presenterToggleLabel = document.getElementById('presenter-toggle-label');
  const presenterPanel = document.getElementById('presenter-jump-panel');
  if (presenterToggleLabel && presenterPanel) {
    const isCollapsed = presenterPanel.classList.contains('collapsed');
    presenterToggleLabel.textContent = isCollapsed 
      ? (dict.presenter_expand || (lang === 'it' ? 'Espandi' : 'Expand')) 
      : (dict.presenter_collapse || (lang === 'it' ? 'Comprimi' : 'Collapse'));
  }

  // Update language badges
  const badge = document.getElementById('lang-badge');
  if (badge) badge.textContent = lang.toUpperCase();

  const protoBadge = document.getElementById('proto-lang-label');
  if (protoBadge) protoBadge.textContent = `Lingua: ${lang.toUpperCase()}`;
}

function toggleNotifications() {
  openModal('notifications-modal');
}

// ============================================================================
// BOTTOM NAV: AIUTO E RECUPERO POP-UP MENU
// ============================================================================
function toggleAiutoPopup(e) {
  if (e) e.stopPropagation();
  const popup = document.getElementById('aiuto-popup-menu');
  const btn = document.getElementById('nav-aiuto-btn');
  const isShown = popup.classList.toggle('show');
  btn.setAttribute('aria-expanded', String(isShown));

  // Close three dots dropdown if open
  document.getElementById('dropdown-menu')?.classList.remove('show');
}

function openRecuperoPukFlow() {
  document.getElementById('aiuto-popup-menu')?.classList.remove('show');
  startUnlockCardFlow();
}

function openAssistenzaScreen() {
  document.getElementById('aiuto-popup-menu')?.classList.remove('show');
  navigateTo('screen-assistenza');
}

// ============================================================================
// HOME SCREEN: ACCORDIONS & POST-REGISTRATION STATE
// ============================================================================
function toggleAccordion(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  card.classList.toggle('open');
}

function setAppState(newState) {
  state.homeState = newState;
  const select = document.getElementById('state-selector');
  if (select && select.value !== newState) {
    select.value = newState;
  }
  updateHomeStateUI();
  showToast(newState === 'registered' ? 'Stato: Carta Registrata' : 'Stato: Non Registrata');
}

function updateHomeStateUI() {
  const unregView = document.getElementById('state-unregistered-view');
  const regView = document.getElementById('state-registered-view');

  if (state.homeState === 'registered') {
    unregView.classList.add('hidden');
    regView.classList.remove('hidden');
  } else {
    unregView.classList.remove('hidden');
    regView.classList.add('hidden');
    // Default open the full access card for clear onboarding
    document.getElementById('card-completo')?.classList.add('open');
  }
}

// ============================================================================
// PIN ENTRY LOGIC (Step 1 di 2)
// ============================================================================
function pressPinKey(digit) {
  if (state.pinDigits.length < 8) {
    state.pinDigits.push(digit);
    updatePinBoxesUI();
  }
}

function deletePinKey() {
  if (state.pinDigits.length > 0) {
    state.pinDigits.pop();
    updatePinBoxesUI();
  }
}

function fillDemoPin() {
  state.pinDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
  updatePinBoxesUI();
  showToast('PIN di prova inserito (12345678)');
}

function updatePinBoxesUI() {
  const boxes = document.querySelectorAll('#pin-boxes-container .dashed-slot, #pin-boxes-container .pin-box');
  boxes.forEach((box, idx) => {
    if (idx < state.pinDigits.length) {
      box.textContent = '•';
      box.classList.add('filled');
      box.classList.remove('active');
    } else if (idx === state.pinDigits.length) {
      box.textContent = '';
      box.classList.remove('filled');
      box.classList.add('active');
    } else {
      box.textContent = '';
      box.classList.remove('filled', 'active');
    }
  });

  const submitBtn = document.getElementById('pin-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = state.pinDigits.length !== 8;
  }
}

function submitPin() {
  if (state.pinDigits.length === 8) {
    navigateTo('screen-nfc');
    // Start NFC scanning simulation automatically upon entering
    setTimeout(() => {
      simulateNfcScan();
    }, 200);
  }
}

// ============================================================================
// NFC READING FLOW (Step 2 di 2)
// ============================================================================
function simulateNfcScan() {
  const progressFill = document.getElementById('nfc-progress-fill');
  const percentText = document.getElementById('nfc-percent');
  const statusText = document.getElementById('nfc-status-text');
  const startBtn = document.getElementById('start-nfc-btn');

  if (startBtn) startBtn.disabled = true;

  // Animated progress bar starts at 25% and fills to 100% over 4 seconds
  let currentPercent = 25;
  const targetPercent = 100;
  const durationMs = 4000;
  const intervalMs = 100; // 40 steps over 4 seconds
  const stepIncrement = (targetPercent - currentPercent) / (durationMs / intervalMs); // 1.875% per step

  if (progressFill) progressFill.style.width = '25%';
  if (percentText) percentText.textContent = '25%';
  if (statusText) statusText.textContent = state.currentLang === 'it' 
    ? 'Lasciala immobile: lettura in corso...' 
    : 'Hold it steady: reading in progress...';

  clearInterval(state.nfcInterval);
  state.nfcInterval = setInterval(() => {
    currentPercent += stepIncrement;
    if (currentPercent >= 100) {
      currentPercent = 100;
      clearInterval(state.nfcInterval);

      if (progressFill) progressFill.style.width = '100%';
      if (percentText) percentText.textContent = '100%';
      if (statusText) statusText.textContent = state.currentLang === 'it' 
        ? 'Lettura completata!' 
        : 'Reading completed!';

      setTimeout(() => {
        if (startBtn) startBtn.disabled = false;
        navigateTo('screen-success');
      }, 400);
    } else {
      const displayVal = Math.round(currentPercent);
      if (progressFill) progressFill.style.width = `${displayVal}%`;
      if (percentText) percentText.textContent = `${displayVal}%`;
    }
  }, intervalMs);
}

// ============================================================================
// REGISTRATION SUCCESS & PROMOTION TO CONFIGURED STATE
// ============================================================================
function completeRegistrationAndGoHome() {
  clearInterval(state.nfcInterval);
  setAppState('registered');
  navigateTo('screen-home');
  showToast(state.currentLang === 'it' ? 'CIE registrata con successo!' : 'CIE registered successfully!');
}

function openConfiguraFlow() {
  clearInterval(state.nfcInterval);
  setAppState('registered');
  navigateTo('screen-gestione');
  showToast(state.currentLang === 'it' ? 'CIE registrata! Configurazione carta' : 'CIE registered! Card configuration');
}

// ============================================================================
// GESTIONE CARTA & RECOVERY WIZARD (Step 4 Requirements)
// ============================================================================
function startUnlockCardFlow() {
  state.pukOrigin = 'sblocca';
  state.pukDigits = [];
  state.newPinDigits = [];
  state.repeatPinDigits = [];
  clearInterval(state.pukNfcInterval);
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');
  
  navigateTo('screen-puk');
  goToPukStep1();
}

function startChangePinFlow() {
  state.pukOrigin = 'cambiapin';
  state.pukDigits = [];
  state.newPinDigits = [];
  state.repeatPinDigits = [];
  clearInterval(state.pukNfcInterval);
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');

  navigateTo('screen-puk');
  goToPukStep2();
}

function handlePukBack() {
  clearInterval(state.pukNfcInterval);
  if (state.pukCurrentStep === 4) {
    goToPukStep3();
  } else if (state.pukCurrentStep === 3) {
    goToPukStep2();
  } else if (state.pukCurrentStep === 2) {
    if (state.pukOrigin === 'sblocca') {
      goToPukStep1();
    } else {
      navigateTo('screen-gestione');
    }
  } else {
    navigateTo('screen-gestione');
  }
}

function goToPukStep1() {
  state.pukCurrentStep = 1;
  const isIt = state.currentLang === 'it';
  const dict = i18nData[state.currentLang];

  // Header Title & Stepper
  const headerTitle = document.getElementById('recovery-header-title');
  if (headerTitle) headerTitle.textContent = dict.sblocca_carta_title;

  const s1 = document.getElementById('rec-step-1-nav');
  const s2 = document.getElementById('rec-step-2-nav');
  const s3 = document.getElementById('rec-step-3-nav');
  const sep1 = document.getElementById('rec-sep-1');
  const sep2 = document.getElementById('rec-sep-2');

  if (s1) { s1.classList.add('active'); s1.style.display = ''; }
  if (s2) { s2.classList.remove('active'); s2.style.display = ''; }
  if (s3) { s3.classList.remove('active'); s3.style.display = ''; }
  if (sep1) sep1.style.display = '';
  if (sep2) sep2.style.display = '';

  // Switch Sub-Views
  document.getElementById('puk-step-1-content')?.classList.remove('hidden');
  document.getElementById('puk-step-2-content')?.classList.add('hidden');
  document.getElementById('puk-step-3-content')?.classList.add('hidden');
  document.getElementById('puk-step-nfc-content')?.classList.add('hidden');
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');

  updatePukBoxesUI();
}

function goToPukStep2() {
  state.pukCurrentStep = 2;
  const dict = i18nData[state.currentLang];

  // Header Title & Stepper: "Step 1" — "Step 2" (active) — "Step 3"
  const headerTitle = document.getElementById('recovery-header-title');
  if (headerTitle) headerTitle.textContent = dict.cambia_pin_title;

  const s1 = document.getElementById('rec-step-1-nav');
  const s2 = document.getElementById('rec-step-2-nav');
  const s3 = document.getElementById('rec-step-3-nav');
  const sep1 = document.getElementById('rec-sep-1');
  const sep2 = document.getElementById('rec-sep-2');

  if (s1) { s1.classList.remove('active'); s1.style.display = ''; }
  if (s2) { s2.classList.add('active'); s2.style.display = ''; }
  if (s3) { s3.classList.remove('active'); s3.style.display = ''; }
  if (sep1) sep1.style.display = '';
  if (sep2) sep2.style.display = '';

  // Switch Sub-Views
  document.getElementById('puk-step-1-content')?.classList.add('hidden');
  document.getElementById('puk-step-2-content')?.classList.remove('hidden');
  document.getElementById('puk-step-3-content')?.classList.add('hidden');
  document.getElementById('puk-step-nfc-content')?.classList.add('hidden');
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');

  updateNewPinBoxesUI();
}

function goToPukStep3() {
  state.pukCurrentStep = 3;
  const dict = i18nData[state.currentLang];

  // Header Title & Stepper: "Step 1" — "Step 2" — "Step 3" (active)
  const headerTitle = document.getElementById('recovery-header-title');
  if (headerTitle) headerTitle.textContent = dict.cambia_pin_title;

  const s1 = document.getElementById('rec-step-1-nav');
  const s2 = document.getElementById('rec-step-2-nav');
  const s3 = document.getElementById('rec-step-3-nav');
  const sep1 = document.getElementById('rec-sep-1');
  const sep2 = document.getElementById('rec-sep-2');

  if (s1) { s1.classList.remove('active'); s1.style.display = ''; }
  if (s2) { s2.classList.remove('active'); s2.style.display = ''; }
  if (s3) { s3.classList.add('active'); s3.style.display = ''; }
  if (sep1) sep1.style.display = '';
  if (sep2) sep2.style.display = '';

  // Switch Sub-Views
  document.getElementById('puk-step-1-content')?.classList.add('hidden');
  document.getElementById('puk-step-2-content')?.classList.add('hidden');
  document.getElementById('puk-step-3-content')?.classList.remove('hidden');
  document.getElementById('puk-step-nfc-content')?.classList.add('hidden');
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');

  updateRepeatPinBoxesUI();
}

function goToPukNfcScan() {
  // Validate PIN matching
  if (state.newPinDigits.length === 8 && state.repeatPinDigits.length === 8) {
    if (state.newPinDigits.join('') !== state.repeatPinDigits.join('')) {
      showToast(state.currentLang === 'it' ? 'I PIN inseriti non corrispondono!' : 'The PINs entered do not match!');
      return;
    }
  }

  state.pukCurrentStep = 4;
  const dict = i18nData[state.currentLang];

  // Header Title & Stepper: Screen 8 specifies "Step 1" — "Step 2" (active)
  const headerTitle = document.getElementById('recovery-header-title');
  if (headerTitle) headerTitle.textContent = dict.cambia_pin_title;

  const s1 = document.getElementById('rec-step-1-nav');
  const s2 = document.getElementById('rec-step-2-nav');
  const s3 = document.getElementById('rec-step-3-nav');
  const sep1 = document.getElementById('rec-sep-1');
  const sep2 = document.getElementById('rec-sep-2');

  if (s1) { s1.classList.remove('active'); s1.style.display = ''; }
  if (s2) { s2.classList.add('active'); s2.style.display = ''; }
  if (sep1) sep1.style.display = '';
  if (sep2) sep2.style.display = 'none';
  if (s3) s3.style.display = 'none';

  // Switch Sub-Views
  document.getElementById('puk-step-1-content')?.classList.add('hidden');
  document.getElementById('puk-step-2-content')?.classList.add('hidden');
  document.getElementById('puk-step-3-content')?.classList.add('hidden');
  document.getElementById('puk-step-nfc-content')?.classList.remove('hidden');
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');

  // Launch the 4-second NFC scan simulation
  setTimeout(() => {
    simulatePukNfcScan();
  }, 250);
}

function simulatePukNfcScan() {
  const progressFill = document.getElementById('puk-nfc-progress-fill');
  const percentText = document.getElementById('puk-nfc-percent');
  const statusText = document.getElementById('puk-nfc-status-text');
  const startBtn = document.getElementById('puk-start-nfc-btn');

  if (startBtn) startBtn.disabled = true;

  // Progress starts at 25% and fills to 100% over 4 seconds
  let currentPercent = 25;
  const targetPercent = 100;
  const durationMs = 4000;
  const intervalMs = 100; // 40 steps
  const stepIncrement = (targetPercent - currentPercent) / (durationMs / intervalMs); // 1.875%

  if (progressFill) progressFill.style.width = '25%';
  if (percentText) percentText.textContent = '25%';
  if (statusText) statusText.textContent = state.currentLang === 'it'
    ? 'Lasciala immobile: lettura in corso...'
    : 'Hold it steady: reading in progress...';

  clearInterval(state.pukNfcInterval);
  state.pukNfcInterval = setInterval(() => {
    currentPercent += stepIncrement;
    if (currentPercent >= 100) {
      currentPercent = 100;
      clearInterval(state.pukNfcInterval);

      if (progressFill) progressFill.style.width = '100%';
      if (percentText) percentText.textContent = '100%';
      if (statusText) statusText.textContent = state.currentLang === 'it'
        ? 'Lettura completata!'
        : 'Reading completed!';

      setTimeout(() => {
        if (startBtn) startBtn.disabled = false;
        // Display centered modal dialog overlay (Screen 9)
        document.getElementById('modal-cambio-pin-success')?.classList.add('show');
      }, 350);
    } else {
      const displayVal = Math.round(currentPercent);
      if (progressFill) progressFill.style.width = `${displayVal}%`;
      if (percentText) percentText.textContent = `${displayVal}%`;
    }
  }, intervalMs);
}

function completeCambioPinAndGoHome() {
  clearInterval(state.pukNfcInterval);
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');
  
  // Update app state to registered so user can log in with new PIN
  setAppState('registered');
  navigateTo('screen-home');
  showToast(state.currentLang === 'it' 
    ? 'PIN aggiornato! Ora puoi accedere con il nuovo PIN.' 
    : 'PIN updated! You can now log in with your new PIN.');
}

// ----------------------------------------------------------------------------
// DIGIT HANDLERS FOR PUK (Step 1)
// ----------------------------------------------------------------------------
function pressPukKey(digit) {
  if (state.pukDigits.length < 8) {
    state.pukDigits.push(digit);
    updatePukBoxesUI();
  }
}

function deletePukKey() {
  if (state.pukDigits.length > 0) {
    state.pukDigits.pop();
    updatePukBoxesUI();
  }
}

function fillDemoPuk() {
  state.pukDigits = ['8', '7', '6', '5', '4', '3', '2', '1'];
  updatePukBoxesUI();
  showToast('PUK di prova inserito (87654321)');
}

function updatePukBoxesUI() {
  const boxes = document.querySelectorAll('#puk-boxes-container .dashed-slot');
  boxes.forEach((box, idx) => {
    if (idx < state.pukDigits.length) {
      box.textContent = '•';
      box.classList.add('filled');
      box.classList.remove('active');
    } else if (idx === state.pukDigits.length) {
      box.textContent = '';
      box.classList.remove('filled');
      box.classList.add('active');
    } else {
      box.textContent = '';
      box.classList.remove('filled', 'active');
    }
  });

  const nextBtn = document.getElementById('puk-next-btn');
  if (nextBtn) nextBtn.disabled = state.pukDigits.length !== 8;
}

// ----------------------------------------------------------------------------
// DIGIT HANDLERS FOR NEW PIN (Step 2)
// ----------------------------------------------------------------------------
function pressNewPinKey(digit) {
  if (state.newPinDigits.length < 8) {
    state.newPinDigits.push(digit);
    updateNewPinBoxesUI();
  }
}

function deleteNewPinKey() {
  if (state.newPinDigits.length > 0) {
    state.newPinDigits.pop();
    updateNewPinBoxesUI();
  }
}

function fillDemoNewPin() {
  state.newPinDigits = ['9', '9', '8', '8', '7', '7', '6', '6'];
  updateNewPinBoxesUI();
  showToast('Nuovo PIN di prova inserito (99887766)');
}

function updateNewPinBoxesUI() {
  const boxes = document.querySelectorAll('#newpin-boxes-container .dashed-slot');
  boxes.forEach((box, idx) => {
    if (idx < state.newPinDigits.length) {
      box.textContent = '•';
      box.classList.add('filled');
      box.classList.remove('active');
    } else if (idx === state.newPinDigits.length) {
      box.textContent = '';
      box.classList.remove('filled');
      box.classList.add('active');
    } else {
      box.textContent = '';
      box.classList.remove('filled', 'active');
    }
  });

  const nextBtn = document.getElementById('newpin-next-btn');
  if (nextBtn) nextBtn.disabled = state.newPinDigits.length !== 8;
}

// ----------------------------------------------------------------------------
// DIGIT HANDLERS FOR REPEAT PIN (Step 3)
// ----------------------------------------------------------------------------
function pressRepeatPinKey(digit) {
  if (state.repeatPinDigits.length < 8) {
    state.repeatPinDigits.push(digit);
    updateRepeatPinBoxesUI();
  }
}

function deleteRepeatPinKey() {
  if (state.repeatPinDigits.length > 0) {
    state.repeatPinDigits.pop();
    updateRepeatPinBoxesUI();
  }
}

function fillDemoRepeatPin() {
  if (state.newPinDigits.length === 8) {
    state.repeatPinDigits = [...state.newPinDigits];
  } else {
    state.newPinDigits = ['9', '9', '8', '8', '7', '7', '6', '6'];
    state.repeatPinDigits = ['9', '9', '8', '8', '7', '7', '6', '6'];
    updateNewPinBoxesUI();
  }
  updateRepeatPinBoxesUI();
  showToast('PIN ripetuto con successo!');
}

function updateRepeatPinBoxesUI() {
  const boxes = document.querySelectorAll('#repeatpin-boxes-container .dashed-slot');
  boxes.forEach((box, idx) => {
    if (idx < state.repeatPinDigits.length) {
      box.textContent = '•';
      box.classList.add('filled');
      box.classList.remove('active');
    } else if (idx === state.repeatPinDigits.length) {
      box.textContent = '';
      box.classList.remove('filled');
      box.classList.add('active');
    } else {
      box.textContent = '';
      box.classList.remove('filled', 'active');
    }
  });

  const nextBtn = document.getElementById('repeatpin-next-btn');
  if (nextBtn) nextBtn.disabled = state.repeatPinDigits.length !== 8;
}

function confirmRemoveCard() {
  const confirmMsg = state.currentLang === 'it'
    ? 'Sei sicuro di voler rimuovere la Carta da questo dispositivo?'
    : 'Are you sure you want to remove the Card from this device?';
  
  if (confirm(confirmMsg)) {
    setAppState('unregistered');
    state.pinDigits = [];
    updatePinBoxesUI();
    navigateTo('screen-home');
    showToast(state.currentLang === 'it' ? 'Carta rimossa' : 'Card removed');
  }
}

// ============================================================================
// QR SCANNER SIMULATION
// ============================================================================
function openQrScanner() {
  openModal('qr-modal');
}

function simulateQrAuthSuccess() {
  closeModal('qr-modal');
  showToast(state.currentLang === 'it' ? 'QR Code rilevato! Accesso PA autorizzato.' : 'QR Code detected! PA Access Authorized.');
}

// ============================================================================
// MODALS & OVERLAYS MANAGEMENT
// ============================================================================
function openModal(modalId) {
  closeAllOverlays();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

function closeAllOverlays() {
  document.getElementById('dropdown-menu')?.classList.remove('show');
  document.getElementById('aiuto-popup-menu')?.classList.remove('show');
  document.getElementById('menu-dots-btn')?.setAttribute('aria-expanded', 'false');
  document.getElementById('nav-aiuto-btn')?.setAttribute('aria-expanded', 'false');

  document.querySelectorAll('.app-modal').forEach(m => m.classList.remove('open'));
}

function handleSemplificatoSubmit(e) {
  e.preventDefault();
  closeModal('semplificato-login-modal');
  showToast(state.currentLang === 'it' ? 'Codice OTP inviato via SMS!' : 'OTP Code sent via SMS!');
}

// ============================================================================
// PROTOTYPE RESET & UTILITIES
// ============================================================================
function resetPrototype() {
  stopAllAutoPlay();
  state.homeState = 'unregistered';
  state.historyStack = [];
  state.pinDigits = [];
  state.pukDigits = [];
  state.newPinDigits = [];
  state.repeatPinDigits = [];
  state.pukCurrentStep = 1;
  state.pukOrigin = 'sblocca';
  clearInterval(state.nfcInterval);
  clearInterval(state.pukNfcInterval);
  document.getElementById('modal-cambio-pin-success')?.classList.remove('show');
  
  updatePinBoxesUI();
  updatePukBoxesUI();
  updateNewPinBoxesUI();
  updateRepeatPinBoxesUI();
  updateHomeStateUI();
  closeContextualHelp();
  navigateTo('screen-home', false);
  showToast(state.currentLang === 'it' 
    ? 'Prototipo ripristinato allo stato iniziale' 
    : 'Prototype reset to initial state');
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-alert');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// ============================================================================
// STEP 5: PRESENTER QUICK-JUMP BAR & AUTO-PLAY ENGINE (LIVE UX EXAM DEMO)
// ============================================================================
function stopAllAutoPlay() {
  if (state.autoPlayTimers && state.autoPlayTimers.length) {
    state.autoPlayTimers.forEach(t => clearTimeout(t));
    state.autoPlayTimers = [];
  }
}

function togglePresenterPanel() {
  const panel = document.getElementById('presenter-jump-panel');
  const label = document.getElementById('presenter-toggle-label');
  if (!panel) return;
  const isCollapsed = panel.classList.toggle('collapsed');
  const lang = state.currentLang;
  const dict = i18nData[lang];
  if (label) {
    label.textContent = isCollapsed 
      ? (dict.presenter_expand || (lang === 'it' ? 'Espandi' : 'Expand')) 
      : (dict.presenter_collapse || (lang === 'it' ? 'Comprimi' : 'Collapse'));
  }
}

// ----------------------------------------------------------------------------
// FLOW A: HOME & NAVIGATION EXPLORATION
// ----------------------------------------------------------------------------
function jumpToFlowA() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  setAppState('unregistered');
  navigateTo('screen-home', false);
  
  // Open both accordions so presenter can explain both 1&2 level vs 3 level
  document.getElementById('card-semplificato')?.classList.add('open');
  document.getElementById('card-completo')?.classList.add('open');
  
  showToast(state.currentLang === 'it' 
    ? 'Flow A: Home & Navigazione avviata' 
    : 'Flow A: Home & Navigation started');
}

function jumpToHomeUnreg() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  setAppState('unregistered');
  navigateTo('screen-home');
}

function jumpToAssistenza() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  navigateTo('screen-assistenza');
  showToast(state.currentLang === 'it' 
    ? 'Assistenza & FAQ aperta' 
    : 'Help & FAQ opened');
}

// ----------------------------------------------------------------------------
// FLOW B: FORGOTTEN PIN -> GESTIONE CARTA -> PUK -> NEW PIN -> NFC -> SUCCESS
// ----------------------------------------------------------------------------
function jumpToFlowB() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  setAppState('unregistered');
  navigateTo('screen-pin', false);

  // Pulse animation on recovery link box to highlight the UX recovery pattern
  const linkBox = document.querySelector('#screen-pin .pin-recovery-inline-box');
  if (linkBox) {
    linkBox.classList.remove('highlight-pulse');
    void linkBox.offsetWidth; // trigger reflow
    linkBox.classList.add('highlight-pulse');
    setTimeout(() => linkBox.classList.remove('highlight-pulse'), 4500);
  }

  showToast(state.currentLang === 'it' 
    ? 'Flow B: PIN Dimenticato -> Clicca "Vai a Gestione Carta"' 
    : 'Flow B: Forgot PIN -> Click "Go to Card Management"');
}

function jumpToPinRecoveryLink() {
  jumpToFlowB();
}

function jumpToGestioneCarta() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  navigateTo('screen-gestione');
  showToast(state.currentLang === 'it' ? 'Gestione Carta' : 'Card Management');
}

function jumpToPukStep(step) {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  navigateTo('screen-puk');

  if (step === 1) {
    goToPukStep1();
    state.pukDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
    updatePukBoxesUI();
    showToast(state.currentLang === 'it' 
      ? 'Step 1: Inserisci PUK (Precompilato 8 cifre)' 
      : 'Step 1: Enter PUK (Pre-filled 8 digits)');
  } else if (step === 2) {
    state.pukDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
    updatePukBoxesUI();
    goToPukStep2();
    state.newPinDigits = ['9', '8', '7', '6', '5', '4', '3', '2'];
    updateNewPinBoxesUI();
    showToast(state.currentLang === 'it' 
      ? 'Step 2: Nuovo PIN (Precompilato)' 
      : 'Step 2: New PIN (Pre-filled)');
  } else if (step === 3) {
    state.pukDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
    state.newPinDigits = ['9', '8', '7', '6', '5', '4', '3', '2'];
    updatePukBoxesUI();
    updateNewPinBoxesUI();
    goToPukStep3();
    state.repeatPinDigits = ['9', '8', '7', '6', '5', '4', '3', '2'];
    updateRepeatPinBoxesUI();
    showToast(state.currentLang === 'it' 
      ? 'Step 3: Ripeti PIN (Precompilato)' 
      : 'Step 3: Repeat PIN (Pre-filled)');
  } else if (step === 4) {
    state.pukDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
    state.newPinDigits = ['9', '8', '7', '6', '5', '4', '3', '2'];
    state.repeatPinDigits = ['9', '8', '7', '6', '5', '4', '3', '2'];
    updatePukBoxesUI();
    updateNewPinBoxesUI();
    updateRepeatPinBoxesUI();
    goToPukNfcScan();
    showToast(state.currentLang === 'it' 
      ? 'Step 4: Scansione NFC e scrittura su chip' 
      : 'Step 4: NFC scan and write to chip');
  }
}

function autoPlayFlowB() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();

  showToast(state.currentLang === 'it' ? 'Avvio Auto-Play Flow B...' : 'Starting Auto-Play Flow B...');

  // 1. Jump to PIN screen with highlighted recovery box
  jumpToFlowB();

  // 2. Click through to Gestione Carta
  const t1 = setTimeout(() => {
    navigateTo('screen-gestione');
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Navigazione a Gestione Carta' 
      : 'Auto-Play: Navigating to Card Management');
  }, 2200);
  state.autoPlayTimers.push(t1);

  // 3. Click Sblocca Carta -> Step 1 (PUK)
  const t2 = setTimeout(() => {
    startUnlockCardFlow();
    fillDemoPuk();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Inserimento PUK 8 cifre' 
      : 'Auto-Play: Entering 8-digit PUK');
  }, 4200);
  state.autoPlayTimers.push(t2);

  // 4. Proceed to Step 2 (Nuovo PIN)
  const t3 = setTimeout(() => {
    goToPukStep2();
    fillDemoNewPin();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Inserimento nuovo PIN' 
      : 'Auto-Play: Entering new PIN');
  }, 6400);
  state.autoPlayTimers.push(t3);

  // 5. Proceed to Step 3 (Ripeti PIN)
  const t4 = setTimeout(() => {
    goToPukStep3();
    fillDemoRepeatPin();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Ripeti e conferma nuovo PIN' 
      : 'Auto-Play: Repeating new PIN');
  }, 8600);
  state.autoPlayTimers.push(t4);

  // 6. Proceed to Step 4 (NFC 4s reading)
  const t5 = setTimeout(() => {
    goToPukNfcScan();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Scansione NFC e salvataggio sul chip...' 
      : 'Auto-Play: NFC scan and saving to chip...');
    simulatePukNfcScan();
  }, 10800);
  state.autoPlayTimers.push(t5);
}

// ----------------------------------------------------------------------------
// FLOW C: DIRECT CARD REGISTRATION (PIN -> NFC 4S -> REGISTERED HOME STATE)
// ----------------------------------------------------------------------------
function jumpToFlowC() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  setAppState('unregistered');
  navigateTo('screen-pin', false);
  state.pinDigits = [];
  updatePinBoxesUI();
  showToast(state.currentLang === 'it' 
    ? 'Flow C: Registrazione Carta -> Step 1: Inserisci PIN' 
    : 'Flow C: Card Registration -> Step 1: Enter PIN');
}

function jumpToRegistrationStep(step) {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  if (step === 1) {
    navigateTo('screen-pin');
    state.pinDigits = [];
    updatePinBoxesUI();
  } else if (step === 2) {
    state.pinDigits = ['1', '2', '3', '4', '5', '6', '7', '8'];
    updatePinBoxesUI();
    navigateTo('screen-nfc');
    const fill = document.getElementById('nfc-progress-fill');
    const percent = document.getElementById('nfc-percent');
    if (fill) fill.style.width = '0%';
    if (percent) percent.textContent = '0%';
  }
}

function jumpToRegistrationSuccess() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  navigateTo('screen-success');
  showToast(state.currentLang === 'it' 
    ? 'Registrazione completata con successo!' 
    : 'Registration completed successfully!');
}

function jumpToHomeReg() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();
  setAppState('registered');
  navigateTo('screen-home');
  showToast(state.currentLang === 'it' 
    ? 'Home: CIE Registrata & Attiva (Accesso Livello 3)' 
    : 'Home: CIE Registered & Active (Level 3 Access)');
}

function autoPlayFlowC() {
  stopAllAutoPlay();
  closeAllOverlays();
  closeContextualHelp();

  showToast(state.currentLang === 'it' ? 'Avvio Auto-Play Flow C...' : 'Starting Auto-Play Flow C...');

  // 1. Jump to PIN screen
  jumpToFlowC();

  // 2. Type 8-digit PIN with realistic cadence
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8'];
  digits.forEach((d, idx) => {
    const t = setTimeout(() => {
      pressPinKey(d);
    }, 250 + idx * 150);
    state.autoPlayTimers.push(t);
  });

  // 3. Submit PIN and enter NFC screen
  const tSubmit = setTimeout(() => {
    submitPin();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play: Scansione NFC (4 secondi)...' 
      : 'Auto-Play: NFC scanning (4 seconds)...');
    simulateNfcScan();
  }, 1800);
  state.autoPlayTimers.push(tSubmit);

  // 4. After 4s NFC scan completes and shows success, return to Home in registered state
  const tHome = setTimeout(() => {
    completeRegistrationAndGoHome();
    showToast(state.currentLang === 'it' 
      ? 'Auto-Play completato! Carta registrata attiva in Home.' 
      : 'Auto-Play completed! Registered card active in Home.');
  }, 7800);
  state.autoPlayTimers.push(tHome);
}

// ============================================================================
// GLOBAL WINDOW BINDINGS (ENSURES BULLETPROOF CALLABILITY FOR INLINE HANDLERS)
// ============================================================================
window.toggleLanguage = toggleLanguage;
window.applyTranslations = applyTranslations;
window.toggleDropdownMenu = toggleDropdownMenu;
window.toggleAiutoPopup = toggleAiutoPopup;
window.openRecuperoPukFlow = openRecuperoPukFlow;
window.openAssistenzaScreen = openAssistenzaScreen;
window.toggleAccordion = toggleAccordion;
window.setAppState = setAppState;
window.startRegistrationFlow = startRegistrationFlow;
window.startRegistrationStep2 = startRegistrationStep2;
window.completeRegistrationAndGoHome = completeRegistrationAndGoHome;
window.openConfiguraFlow = openConfiguraFlow;
window.openQrScanner = openQrScanner;
window.simulateQrAuthSuccess = simulateQrAuthSuccess;
window.startUnlockCardFlow = startUnlockCardFlow;
window.startChangePinFlow = startChangePinFlow;
window.openRecoveryPukModal = openRecoveryPukModal;
window.removeCardFromDevice = removeCardFromDevice;
window.confirmRemoveCard = confirmRemoveCard;
window.openFaqTutorial = openFaqTutorial;
window.simulateNfcScan = simulateNfcScan;
window.simulatePukNfcScan = simulatePukNfcScan;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeAllOverlays = closeAllOverlays;
window.openContextualHelp = openContextualHelp;
window.closeContextualHelp = closeContextualHelp;
window.goToAssistenzaFromContext = goToAssistenzaFromContext;
window.resetPrototype = resetPrototype;
window.pressPinKey = pressPinKey;
window.deletePinKey = deletePinKey;
window.submitPin = submitPin;
window.pressPukKey = pressPukKey;
window.deletePukKey = deletePukKey;
window.goToPukStep1 = goToPukStep1;
window.goToPukStep2 = goToPukStep2;
window.pressNewPinKey = pressNewPinKey;
window.deleteNewPinKey = deleteNewPinKey;
window.goToPukStep3 = goToPukStep3;
window.pressRepeatPinKey = pressRepeatPinKey;
window.deleteRepeatPinKey = deleteRepeatPinKey;
window.goToPukNfcScan = goToPukNfcScan;
window.closeCambioPinSuccessModal = closeCambioPinSuccessModal;
window.completeCambioPinAndGoHome = completeCambioPinAndGoHome;
window.fillDemoPin = fillDemoPin;
window.fillDemoPuk = fillDemoPuk;
window.fillDemoNewPin = fillDemoNewPin;
window.fillDemoRepeatPin = fillDemoRepeatPin;
window.navigateBack = navigateBack;
window.navigateTo = navigateTo;
window.handlePukBack = handlePukBack;
window.toggleNotifications = toggleNotifications;
window.handleSemplificatoSubmit = handleSemplificatoSubmit;

// Presenter Menu Exports
window.stopAllAutoPlay = stopAllAutoPlay;
window.togglePresenterPanel = togglePresenterPanel;
window.jumpToFlowA = jumpToFlowA;
window.jumpToHomeUnreg = jumpToHomeUnreg;
window.jumpToAssistenza = jumpToAssistenza;
window.jumpToFlowB = jumpToFlowB;
window.jumpToPinRecoveryLink = jumpToPinRecoveryLink;
window.jumpToGestioneCarta = jumpToGestioneCarta;
window.jumpToPukStep = jumpToPukStep;
window.autoPlayFlowB = autoPlayFlowB;
window.jumpToFlowC = jumpToFlowC;
window.jumpToRegistrationStep = jumpToRegistrationStep;
window.jumpToRegistrationSuccess = jumpToRegistrationSuccess;
window.jumpToHomeReg = jumpToHomeReg;
window.autoPlayFlowC = autoPlayFlowC;
