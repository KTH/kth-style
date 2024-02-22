!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.klaro = t())
    : (e.klaro = t())
})(self, function () {
  return (() => {
    var e = {
        702: (e) => {
          e.exports = {
            acceptAll: 'Accepta-les totes',
            acceptSelected: 'Accepta les escollides',
            service: {
              disableAll: {
                description: 'Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.',
                title: 'Habilita/deshabilita totes les aplicacions',
              },
              optOut: {
                description: 'Aquesta aplicació es carrega per defecte, però podeu desactivar-la',
                title: '(opt-out)',
              },
              purpose: 'Finalitat',
              purposes: 'Finalitats',
              required: { description: 'Aquesta aplicació es necessita sempre', title: '(necessària)' },
            },
            close: 'Tanca',
            consentModal: {
              description: 'Aquí podeu veure i personalitzar la informació que recopilem sobre vós.',
              privacyPolicy: {
                name: 'política de privadesa',
                text: 'Per a més informació, consulteu la nostra {privacyPolicy}.',
              },
              title: 'Informació que recopilem',
            },
            consentNotice: {
              changeDescription:
                'Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.',
              description:
                'Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.',
              imprint: { name: 'Empremta' },
              learnMore: 'Saber-ne més',
              privacyPolicy: { name: 'política de privadesa' },
            },
            decline: 'Rebutja',
            ok: 'Accepta',
            poweredBy: 'Funciona amb Klaro!',
            purposeItem: { service: 'aplicació', services: 'aplicacions' },
            save: 'Desa',
          }
        },
        584: (e) => {
          e.exports = {
            privacyPolicy: {
              name: 'zásady ochrany soukromí',
              text: 'Pro další informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.',
            },
            consentModal: {
              title: 'Služby, které bychom rádi využili',
              description:
                'Zde můžete posoudit a přizpůsobit služby, které bychom rádi na tomto webu používali. Máte to pod kontrolou! Povolte nebo zakažte služby, jak uznáte za vhodné.',
            },
            consentNotice: {
              testing: 'Testing mode!',
              changeDescription: 'Od vaší poslední návštěvy došlo ke změnám, obnovte prosím svůj souhlas.',
              description:
                '„Dobrý den! Můžeme povolit některé další služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“',
              'learnMore|capitalize': 'Vyberu si',
            },
            účely: {
              functional: {
                'title|capitalize': 'Poskytování služeb',
                description:
                  'Tyto služby jsou nezbytné pro správné fungování tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala správně.\n',
              },
              performance: {
                'title|capitalize': 'Optimalizace výkonu',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje za účelem optimalizace služeb, které jsou na tomto webu poskytovány.\n',
              },
              marketing: {
                'title|capitalize': 'Marketing',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje, aby se vám zobrazoval relevantní obsah o produktech, službách nebo tématech, které by vás mohly zajímat.',
              },
              advertising: {
                'title|capitalize': 'Reklama',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje, aby vám zobrazovaly personalizované nebo zájmově orientované reklamy.',
              },
            },
            purposeItem: {
              service: 'Jednoduchá služba <tr-snip></tr-snip> , kterou nainstaluji do svého počítače.',
              services: 'Několik jednoduchých služeb <tr-snip></tr-snip> , které nainstaluji do svého počítače.',
            },
            'ok|capitalize': 'To je v pořádku',
            save: 'uložit',
            'decline|capitalize': 'Nepřijímám',
            close: 'zavřít',
            acceptAll: 'přijmout vše',
            acceptSelected: 'přijmout vybrané',
            service: {
              disableAll: {
                title: 'povolit nebo zakázat všechny služby',
                description: 'Pomocí tohoto přepínače můžete povolit nebo zakázat všechny služby.',
              },
              optOut: {
                title: '(opt-out)',
                description: 'Tato služba se načítá ve výchozím nastavení (ale můžete ji zrušit)',
              },
              required: { title: '(vždy vyžadováno)', description: 'Tato služba je vždy vyžadována' },
              purposes: 'Zpracování  pro účely <tr-snip></tr-snip>',
              purpose: 'Zpracování pro účely <tr-snip></tr-snip>',
            },
            poweredBy: 'Realizováno pomocí Klaro!',
            contextualConsent: {
              description: 'Chcete načíst externí obsah dodávaný prostřednictvím {title}?',
              acceptOnce: 'Ano',
              acceptAlways: 'Vždy',
            },
          }
        },
        163: (e) => {
          e.exports = {
            acceptAll: 'Tillad alle',
            acceptSelected: 'Tillad udvalgte',
            service: {
              disableAll: {
                description: 'Brug denne kontakt til at aktivere/deaktivere alle apps.',
                title: 'Aktiver/deaktiver alle applikatione',
              },
              optOut: {
                description: 'Denne applikation indlæses som standard (men du kan deaktivere den)',
                title: 'Opt-Out',
              },
              purpose: 'Formål',
              purposes: 'Formål',
              required: { description: 'Denne applikation er altid nødvendig', title: '(Altid nødvendig)' },
            },
            close: 'Luk',
            consentModal: {
              description: 'Her kan du se og ændre, hvilke informationer vi gemmer om dig.',
              privacyPolicy: {
                name: 'Flere informationer finde du under {privacyPolicy}',
                text: 'databeskyttelseserklæring.',
              },
              title: 'Informationer, som vi gemmer',
            },
            consentNotice: {
              changeDescription: 'Der har været ændringer siden dit sidste besøg. Opdater dit valg.',
              description: 'Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.',
              imprint: { name: '' },
              learnMore: 'Læs mere',
              privacyPolicy: { name: 'Datenschutzerklärung' },
            },
            decline: 'Afvis',
            ok: 'Ok',
            poweredBy: 'Realiseret med Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Gem',
          }
        },
        555: (e) => {
          e.exports = {
            acceptAll: 'Alle akzeptieren',
            acceptSelected: 'Ausgewählte akzeptieren',
            close: 'Schließen',
            consentModal: {
              description:
                'Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.',
              privacyPolicy: {
                name: 'Datenschutzerklärung',
                text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
              },
              title: 'Dienste, die wir nutzen möchten',
            },
            consentNotice: {
              changeDescription: 'Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.',
              title: 'Cookie-Einstellungen',
              description:
                'Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.',
              imprint: { name: 'Impressum' },
              learnMore: 'Lassen Sie mich wählen',
              privacyPolicy: { name: 'Datenschutzerklärung' },
              testing: 'Testmodus!',
            },
            contextualConsent: {
              acceptAlways: 'Immer',
              acceptOnce: 'Ja',
              description: 'Möchten Sie von {title} bereitgestellte externe Inhalte laden?',
            },
            decline: 'Ich lehne ab',
            ok: 'Das ist ok',
            poweredBy: 'Realisiert mit Klaro!',
            privacyPolicy: {
              name: 'Datenschutzerklärung',
              text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
            },
            purposeItem: { service: 'Dienst', services: 'Dienste' },
            purposes: {
              advertising: {
                description:
                  'Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.',
                title: 'Werbung',
              },
              functional: {
                description:
                  'Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n',
                title: 'Dienstbereitstellung',
              },
              marketing: {
                description:
                  'Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n',
                title: 'Optimierung der Leistung',
              },
            },
            save: 'Speichern',
            service: {
              disableAll: {
                description: 'Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.',
                title: 'Alle Dienste aktivieren oder deaktivieren',
              },
              optOut: {
                description: 'Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)',
                title: '(Opt-out)',
              },
              purpose: 'Zweck',
              purposes: 'Zwecke',
              required: { description: 'Dieser Service ist immer erforderlich', title: '(immer erforderlich)' },
            },
          }
        },
        40: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description:
                  'Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.',
                title: 'Για όλες τις εφαρμογές',
              },
              optOut: {
                description: 'Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί',
                title: '(μη απαιτούμενο)',
              },
              purpose: 'Σκοπός',
              purposes: 'Σκοποί',
              required: {
                description: 'Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό',
                title: '(απαιτούμενο)',
              },
            },
            close: 'Κλείσιμο',
            consentModal: {
              description: 'Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.',
              privacyPolicy: {
                name: 'Πολιτική Απορρήτου',
                text: 'Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}.',
              },
              title: 'Πληροφορίες που συλλέγουμε',
            },
            consentNotice: {
              changeDescription:
                'Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.',
              description:
                'Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Περισσότερα',
              privacyPolicy: { name: 'Πολιτική Απορρήτου' },
            },
            decline: 'Απόρριπτω',
            ok: 'OK',
            poweredBy: 'Υποστηρίζεται από το Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Αποθήκευση',
          }
        },
        210: (e) => {
          e.exports = {
            acceptAll: 'Accept all',
            acceptSelected: 'Accept selected',
            close: 'Close',
            consentModal: {
              description:
                "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",
              title: 'Services we would like to use',
            },
            consentNotice: {
              changeDescription: 'There were changes since your last visit, please renew your consent.',
              title: 'Cookie Consent',
              description:
                'Hi! Could we please enable some additional services for {purposes}? You can always change or withdraw your consent later.',
              learnMore: 'Let me choose',
              testing: 'Testing mode!',
            },
            contextualConsent: {
              acceptAlways: 'Always',
              acceptOnce: 'Yes',
              description: 'Do you want to load external content supplied by {title}?',
            },
            decline: 'I decline',
            ok: "That's ok",
            poweredBy: 'Realized with Klaro!',
            privacyPolicy: { name: 'privacy policy', text: 'To learn more, please read our {privacyPolicy}.' },
            purposeItem: { service: 'service', services: 'services' },
            purposes: {
              advertising: {
                description:
                  'These services process personal information to show you personalized or interest-based advertisements.',
                title: 'Advertising',
              },
              functional: {
                description:
                  'These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n',
                title: 'Service Provision',
              },
              marketing: {
                description:
                  'These services process personal information to show you relevant content about products, services or topics that you might be interested in.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'These services process personal information to optimize the service that this website offers.\n',
                title: 'Performance Optimization',
              },
            },
            save: 'Save',
            service: {
              disableAll: {
                description: 'Use this switch to enable or disable all services.',
                title: 'Enable or disable all services',
              },
              optOut: { description: 'This services is loaded by default (but you can opt out)', title: '(opt-out)' },
              purpose: 'purpose',
              purposes: 'purposes',
              required: { description: 'This services is always required', title: '(always required)' },
            },
          }
        },
        833: (e) => {
          e.exports = {
            acceptAll: 'Aceptar todas',
            acceptSelected: 'Aceptar seleccionadas',
            close: 'Cerrar',
            consentModal: {
              description:
                'Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.',
              privacyPolicy: {
                name: 'política de privacidad',
                text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
              },
              title: 'Servicios que nos gustaría utilizar',
            },
            consentNotice: {
              changeDescription:
                'Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.',
              description:
                '¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}? Siempre podrá cambiar o retirar su consentimiento más tarde.',
              imprint: { name: 'Imprimir' },
              learnMore: 'Quiero elegir',
              privacyPolicy: { name: 'política de privacidad' },
              testing: '¡Modo de prueba!',
            },
            contextualConsent: {
              acceptAlways: 'Siempre',
              acceptOnce: 'Sí',
              description: '¿Quieres cargar el contenido externo suministrado por {title}?',
            },
            decline: 'Descartar todas',
            ok: 'De acuerdo',
            poweredBy: '¡Realizado con Klaro!',
            privacyPolicy: {
              name: 'política de privacidad',
              text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
            },
            purposeItem: { service: 'servicio', services: 'servicios' },
            purposes: {
              advertising: {
                description:
                  'Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.',
                title: 'Publicidad',
              },
              functional: {
                description:
                  'Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.',
                title: 'Prestación de servicios',
              },
              marketing: {
                description:
                  'Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.',
                title: 'Optimización del rendimiento',
              },
            },
            save: 'Guardar',
            service: {
              disableAll: {
                description: 'Utilice este interruptor para activar o desactivar todos los servicios.',
                title: 'Activar o desactivar todos los servicios',
              },
              optOut: {
                description: 'Este servicio está habilitado por defecto (pero puede optar por lo contrario)',
                title: '(desactivar)',
              },
              purpose: 'Finalidad',
              purposes: 'Finalidades',
              required: { description: 'Este servicio es necesario siempre', title: '(siempre requerido)' },
            },
          }
        },
        646: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: { description: 'Aktivoi kaikki päälle/pois.', title: 'Valitse kaikki' },
              optOut: {
                description: 'Ladataan oletuksena (mutta voit ottaa sen pois päältä)',
                title: '(ladataan oletuksena)',
              },
              purpose: 'Käyttötarkoitus',
              purposes: 'Käyttötarkoitukset',
              required: { description: 'Sivusto vaatii tämän aina', title: '(vaaditaan)' },
            },
            close: 'Sulje',
            consentModal: {
              description: 'Voit tarkastella ja muokata sinusta keräämiämme tietoja.',
              privacyPolicy: { name: 'tietosuojasivultamme', text: 'Voit lukea lisätietoja {privacyPolicy}.' },
              title: 'Keräämämme tiedot',
            },
            consentNotice: {
              changeDescription: 'Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.',
              description: 'Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Lue lisää',
              privacyPolicy: { name: 'tietosuojasivultamme' },
            },
            decline: 'Hylkää',
            ok: 'Hyväksy',
            poweredBy: 'Palvelun tarjoaa Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Tallenna',
          }
        },
        483: (e) => {
          e.exports = {
            acceptAll: 'Accepter tout',
            acceptSelected: 'Accepter sélectionné',
            close: 'Fermer',
            consentModal: {
              description:
                "Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",
              privacyPolicy: {
                name: 'politique de confidentialité',
                text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
              },
              title: 'Services que nous souhaitons utiliser',
            },
            consentNotice: {
              changeDescription:
                'Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.',
              description:
                'Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.',
              imprint: { name: 'mentions légales' },
              learnMore: 'Laissez-moi choisir',
              privacyPolicy: { name: 'politique de confidentialité' },
              testing: 'Mode test !',
            },
            contextualConsent: {
              acceptAlways: 'Toujours',
              acceptOnce: 'Oui',
              description: 'Vous souhaitez charger un contenu externe fourni par {title}?',
            },
            decline: 'Je refuse',
            ok: "C'est bon.",
            poweredBy: 'Réalisé avec Klaro !',
            privacyPolicy: {
              name: 'politique de confidentialité',
              text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
            },
            purposeItem: { service: 'service', services: 'services' },
            purposes: {
              advertising: {
                description:
                  'Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.',
                title: 'Publicité',
              },
              functional: {
                description:
                  'Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n',
                title: 'Prestation de services',
              },
              marketing: {
                description:
                  'Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.',
                title: 'Marketing',
              },
              performance: {
                description:
                  "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
                title: 'Optimisation de la performance',
              },
            },
            save: 'Enregistrer',
            service: {
              disableAll: {
                description: 'Utilisez ce commutateur pour activer ou désactiver tous les services.',
                title: 'Activer ou désactiver tous les services',
              },
              optOut: {
                description: 'Ce service est chargé par défaut (mais vous pouvez le désactiver)',
                title: '(opt-out)',
              },
              purpose: 'Objet',
              purposes: 'Fins',
              required: { description: 'Ce service est toujours nécessaire', title: '(toujours requis)' },
            },
          }
        },
        986: (e) => {
          e.exports = {
            acceptAll: 'Aceptar todas',
            acceptSelected: 'Aceptar seleccionadas',
            close: 'Pechar',
            consentModal: {
              description:
                'Aquí pode avaliar e personalizar os servizos que nos gustaría utilizar neste sitio web. ¡Vostede decide! Habilite ou deshabilite os servicios como lle conveña.',
              privacyPolicy: {
                name: 'política de privacidade',
                text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
              },
              title: 'Servizos que nos gustaría utilizar',
            },
            consentNotice: {
              changeDescription:
                'Houbo cambios nas cookies dende a súa última visita. Debe renovar o seu consentimento.',
              description:
                '¡Ola! ¿Poderíamos habilitar algúns servizos adicionais para {purposes}? Sempre poderá cambiar ou retirar o séu consentimento máis tarde.',
              imprint: { name: 'Imprimir' },
              learnMore: 'Quero elixir',
              privacyPolicy: { name: 'política de privacidade' },
              testing: '¡Modo de proba!',
            },
            decline: 'Descartar todas',
            ok: 'De acordo',
            poweredBy: '¡Realizado con Klaro!',
            privacyPolicy: {
              name: 'política de privacidade',
              text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
            },
            purposeItem: { service: 'servizo', services: 'servizos' },
            purposes: {
              advertising: {
                description:
                  'Estes servizos procesan información persoal para mostrarlle anuncios personalizados ou basados en intereses.',
                title: 'Publicidade',
              },
              functional: {
                description:
                  'Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a páxina non funcionaría correctamente.',
                title: 'Prestación de servizos',
              },
              marketing: {
                description:
                  'Estes servizos procesan información persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Estes servizos procesan información persoal para optimizar o servizo que ofrece este sitio.',
                title: 'Optimización do rendimento',
              },
            },
            save: 'Gardar',
            service: {
              disableAll: {
                description: 'Utilice este interruptor para activar ou desactivar todos os servizos.',
                title: 'Activar ou desactivar todos os servizos',
              },
              optOut: {
                description: 'Este servizo está habilitado por defecto (pero pode optar polo contrario)',
                title: '(desactivar)',
              },
              purpose: 'Finalidade',
              purposes: 'Finalidades',
              required: { description: 'Este servizo é necesario sempre', title: '(sempre requirido)' },
            },
          }
        },
        439: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Prihvati sve',
            acceptSelected: '',
            acceptSelected_en: 'Prihvati odabrane',
            service: {
              disableAll: {
                description: 'Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.',
                title: 'Izmeijeni sve',
              },
              optOut: {
                description: 'Ova aplikacija je učitana automatski (ali je možete onemogućiti)',
                title: '(onemogućite)',
              },
              purpose: 'Svrha',
              purposes: 'Svrhe',
              required: { description: 'Ova aplikacija je uvijek obavezna', title: '(obavezna)' },
            },
            close: 'Zatvori',
            consentModal: {
              description: 'Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.',
              privacyPolicy: {
                name: 'pravila privatnosti',
                text: 'Za više informacije pročitajte naša {privacyPolicy}.',
              },
              title: 'Informacije koje prikupljamo',
            },
            consentNotice: {
              changeDescription:
                'Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.',
              description: 'Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Saznajte više',
              privacyPolicy: { name: 'pravila privatnosti' },
            },
            decline: 'Odbij',
            ok: 'U redu',
            poweredBy: 'Pokreće Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Spremi',
          }
        },
        250: (e) => {
          e.exports = {
            acceptAll: 'Mind elfogad',
            acceptAll_en: 'Accept all',
            acceptSelected: 'Kiválasztottat elfogad',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Használja ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.',
                title: 'Összes app átkapcsolása',
              },
              optOut: {
                description: 'Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)',
                title: '(leiratkozás)',
              },
              purpose: 'Cél',
              purposes: 'Célok',
              required: { description: 'Ez az alkalmazás mindig szükséges', title: '(mindig szükséges)' },
            },
            close: 'Elvet',
            consentModal: {
              description: 'Itt láthatja és testreszabhatja az önről gyűjtött információkat.',
              privacyPolicy: {
                name: 'adatvédelmi irányelveinket',
                text: 'További információért kérjük, olvassa el az {privacyPolicy}.',
              },
              title: 'Információk, amiket gyűjtünk',
            },
            consentNotice: {
              changeDescription: 'Az utolsó látogatás óta változások történtek, kérjük, frissítse a hozzájárulását.',
              description: 'Személyes adatait összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.',
              imprint: { name: 'impresszum', name_en: 'imprint' },
              learnMore: 'Tudjon meg többet',
              privacyPolicy: { name: 'adatvédelmi irányelveinket' },
            },
            contextualConsent: {
              acceptAlways: 'Mindig',
              acceptOnce: 'Igen',
              description: 'Be akarod tölteni a {title} által szolgáltatott külső tartalmakat?',
            },
            decline: 'Elutasít',
            ok: 'Elfogad',
            poweredBy: 'Powered by Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Mentés',
          }
        },
        376: (e) => {
          e.exports = {
            acceptAll: 'Accettare tutti',
            acceptSelected: 'Accettare selezionato',
            close: 'Chiudi',
            consentModal: {
              description:
                'Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.',
              privacyPolicy: {
                name: 'informativa sulla privacy',
                text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
              },
              title: 'Servizi che desideriamo utilizzare',
            },
            consentNotice: {
              changeDescription:
                'Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.',
              description:
                'Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}? Può sempre modificare o ritirare il suo consenso in un secondo momento.',
              imprint: { name: 'impronta' },
              learnMore: 'Lasciatemi scegliere',
              privacyPolicy: { name: 'informativa sulla privacy' },
              testing: 'Modalità di test!',
            },
            contextualConsent: {
              acceptAlways: 'Sempre',
              acceptOnce: 'Sì',
              description: 'Vuole caricare contenuti esterni forniti da {title}?',
            },
            decline: 'Rifiuto',
            ok: 'Va bene così',
            poweredBy: 'Realizzato con Klaro!',
            privacyPolicy: {
              name: 'informativa sulla privacy',
              text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
            },
            purposeItem: { service: 'servizio', services: 'servizi' },
            purposes: {
              advertising: {
                description:
                  'Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.',
                title: 'Pubblicità',
              },
              functional: {
                description:
                  'Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n',
                title: 'Fornitura di servizi',
              },
              marketing: {
                description:
                  'Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n',
                title: 'Ottimizzazione delle prestazioni',
              },
            },
            save: 'Salva',
            service: {
              disableAll: {
                description: 'Utilizzi questo interruttore per attivare o disattivare tutti i servizi.',
                title: 'Attivare o disattivare tutti i servizi',
              },
              optOut: {
                description: 'Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)',
                title: '(opt-out)',
              },
              purpose: 'Scopo dell',
              purposes: 'Finalità',
              required: { description: 'Questo servizio è sempre richiesto', title: '(sempre richiesto)' },
            },
          }
        },
        619: (e) => {
          e.exports = {
            acceptAll: 'Accepteer alle',
            acceptSelected: 'Geselecteerde',
            close: 'Sluit',
            consentModal: {
              description:
                'Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.',
              privacyPolicy: { name: 'privacybeleid', text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.' },
              title: 'Diensten die we graag willen gebruiken',
            },
            consentNotice: {
              changeDescription:
                'Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.',
              description:
                'Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.',
              imprint: { name: 'impressum' },
              learnMore: 'Laat me kiezen',
              privacyPolicy: { name: 'privacybeleid' },
              testing: 'Testmodus!',
            },
            contextualConsent: {
              acceptAlways: 'Altijd',
              acceptOnce: 'Ja',
              description: 'Wilt u externe content laden die door {title} wordt aangeleverd ?',
            },
            decline: 'Ik weiger',
            ok: 'Dat is oké',
            poweredBy: 'Gerealiseerd met Klaro!',
            privacyPolicy: { name: 'privacybeleid', text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.' },
            purposeItem: { service: 'service', services: 'diensten' },
            purposes: {
              advertising: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.',
                title: 'Reclame',
              },
              functional: {
                description:
                  'Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n',
                title: 'Dienstverlening',
              },
              marketing: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n',
                title: 'Optimalisatie van de prestaties',
              },
            },
            save: 'Opslaan',
            service: {
              disableAll: {
                description: 'Gebruik deze schakelaar om alle diensten in of uit te schakelen.',
                title: 'Alle diensten in- of uitschakelen',
              },
              optOut: {
                description: 'Deze diensten worden standaard geladen (maar u kunt zich afmelden)',
                title: '(opt-out)',
              },
              purpose: 'Verwerkingsdoel',
              purposes: 'Verwerkingsdoeleinden',
              required: { description: 'Deze diensten zijn altijd nodig', title: '(altijd nodig)' },
            },
          }
        },
        501: (e) => {
          e.exports = {
            acceptAll: 'Godtar alle',
            acceptSelected: 'Godtar valgt',
            service: {
              disableAll: { description: 'Bruk denne for å skru av/på alle apper.', title: 'Bytt alle apper' },
              optOut: {
                description: 'Denne appen er lastet som standard (men du kan skru det av)',
                title: '(opt-out)',
              },
              purpose: 'Årsak',
              purposes: 'Årsaker',
              required: { description: 'Denne applikasjonen er alltid påkrevd', title: '(alltid påkrevd)' },
            },
            close: '',
            close_en: 'Close',
            consentModal: {
              description: 'Her kan du se og velge hvilken informasjon vi samler inn om deg.',
              privacyPolicy: {
                name: 'personvernerklæring',
                text: 'For å lære mer, vennligst les vår {privacyPolicy}.',
              },
              title: 'Informasjon vi samler inn',
            },
            consentNotice: {
              changeDescription: 'Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.',
              description: 'Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Lær mer',
              privacyPolicy: { name: 'personvernerklæring' },
            },
            decline: 'Avslå',
            ok: 'OK',
            poweredBy: 'Laget med Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Opslaan',
          }
        },
        375: (e) => {
          e.exports = {
            acceptAll: 'Tot acceptar',
            acceptSelected: 'Acceptar çò seleccionat',
            close: 'Tampar',
            consentModal: {
              description:
                'Aquí podètz mesurar e personalizar los servicis que volriam utilizar sus aqueste site web. Avètz lo darrièr mot ! Activatz o desactivatz segon vòstra causida.',
              title: 'Servicis que volriam utilizar',
            },
            consentNotice: {
              changeDescription:
                'I aguèt de modificacions dempuèi vòstra darrièra visita, mercés de repassar vòstre consentiment.',
              description:
                'Adieu ! Poiriam activar mai de servici per {purposes} ? Podètz totjorn modificar o tirar vòstre consentiment mai tard.',
              learnMore: 'Me daissar causir',
              testing: 'Mòde tèst !',
            },
            contextualConsent: {
              acceptAlways: 'Totjorn',
              acceptOnce: 'Òc',
              description: 'Volètz cargar de contenguts extèrn provesits per {title} ?',
            },
            decline: 'Refusi',
            ok: 'Es bon',
            poweredBy: 'Realizat amb Klaro !',
            privacyPolicy: {
              name: 'politica de confidencialitat',
              text: 'Per ne saber mai, vejatz nòstra {privacyPolicy}.',
            },
            purposeItem: { service: 'servici', services: 'servicis' },
            purposes: {
              advertising: {
                description:
                  'Aquestes servicis tractan d’informacions personalas per vos mostrar de reclamas personalizadas o basadas suls interèsses.',
                title: 'Reclama',
              },
              functional: {
                description:
                  'Aquestes servicis son essencials pel foncionament corrèct d’aqueste site web. Los podètz pas desactivar aquí pr’amor que lo servici foncionariá pas coma cal autrament.\n',
                title: 'Servici de provision',
              },
              marketing: {
                description:
                  'Aquestes servicis tractan d’informacions personalas per vos mostrar de contenguts a prepaus de produits, de servicis o tèmas que poirián vos interessar.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Aquestes servicis tractan d’informacions per optimizar lo servici qu’aqueste site web prepausa.\n',
                title: 'Optimizacion de las performanças',
              },
            },
            save: 'Salvar',
            service: {
              disableAll: {
                description: 'Utilizatz aqueste alternator per activar o desactivar totes los servicis.',
                title: 'Activar o desactivar totes los servicis',
              },
              optOut: {
                description: 'Aqueste servici es cargar per defaut (mas lo podètz desactivar)',
                title: '(opt-out)',
              },
              purpose: 'finalitat',
              purposes: 'finalitat',
              required: { description: 'Aqueste servici es totjorn requesit', title: '(totjorn requesit)' },
            },
          }
        },
        758: (e) => {
          e.exports = {
            acceptAll: 'Zaakceptuj wszystkie',
            acceptSelected: 'Zaakceptuj wybrane',
            close: 'Zamknij',
            consentModal: {
              description:
                'Tutaj mogą Państwo ocenić i dostosować usługi, które chcielibyśmy wykorzystać na tej stronie. Włączaj lub wyłączaj usługi według własnego uznania.',
              privacyPolicy: {
                name: 'polityką prywatności',
                text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
              },
              title: 'Usługi, z których chcielibyśmy skorzystać',
            },
            consentNotice: {
              changeDescription: 'Od Twojej ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.',
              description:
                'Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo później zmienić lub wycofać swoją zgodę.',
              imprint: { name: 'Imprint' },
              learnMore: 'Pozwól mi wybrać',
              privacyPolicy: { name: 'polityka prywatności' },
              testing: 'Tryb testowy!',
            },
            contextualConsent: {
              acceptAlways: 'Zawsze',
              acceptOnce: 'Tak',
              description: 'Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?',
            },
            decline: 'Odmawiam',
            ok: 'Ok',
            poweredBy: 'Technologia dostarczona przez Klaro',
            privacyPolicy: {
              name: 'polityka prywatności',
              text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
            },
            purposeItem: { service: 'usługa', services: 'usługi' },
            purposes: {
              advertising: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach reklam.',
                title: 'Reklama',
              },
              functional: {
                description:
                  'Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie strona nie działałaby prawidłowo.\n',
                title: 'Świadczenie usług',
              },
              marketing: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n',
                title: 'Optymalizacja wydajności',
              },
            },
            save: 'Zapisz',
            service: {
              disableAll: {
                description: 'Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.',
                title: 'Włącz lub wyłącz wszystkie usługi',
              },
              optOut: {
                description: 'Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)',
                title: '(opt-out)',
              },
              purpose: 'Cel',
              purposes: 'Cele',
              required: { description: 'Usługi te są zawsze wymagane', title: '(zawsze wymagane)' },
            },
          }
        },
        509: (e) => {
          e.exports = {
            acceptAll: 'Aceitar todos',
            acceptSelected: 'Aceitar selecionados',
            close: 'Fechar',
            consentModal: {
              description:
                'Aqui você pode avaliar e personalizar os serviços que gostaríamos de usar neste website. Você está no comando! Habilite ou desabilite os serviços como julgar conveniente.',
              privacyPolicy: {
                name: 'política de privacidade',
                text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
              },
              title: 'Serviços que gostaríamos de utilizar',
            },
            consentNotice: {
              changeDescription: 'Houve mudanças desde sua última visita, queira renovar seu consentimento.',
              description:
                'Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}? Você pode sempre mudar ou retirar seu consentimento mais tarde.',
              imprint: { name: 'imprimir' },
              learnMore: 'Deixe-me escolher',
              privacyPolicy: { name: 'política de privacidade' },
              testing: 'Modo de teste!',
            },
            contextualConsent: {
              acceptAlways: 'Sempre',
              acceptOnce: 'Sim',
              description: 'Você deseja carregar conteúdo externo fornecido por {title}?',
            },
            decline: 'Recusar',
            ok: 'Aceito.',
            poweredBy: 'Realizado com Klaro!',
            privacyPolicy: {
              name: 'política de privacidade',
              text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
            },
            purposeItem: { service: 'serviço', services: 'serviços' },
            purposes: {
              advertising: {
                description:
                  'Esses serviços processam informações pessoais para mostrar a você anúncios personalizados ou baseados em interesses.',
                title: 'Publicidade',
              },
              functional: {
                description:
                  'Esses serviços são essenciais para o correto funcionamento deste website. Você não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n',
                title: 'Prestação de serviços',
              },
              marketing: {
                description:
                  'Esses serviços processam informações pessoais para mostrar a você conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n',
                title: 'Otimização do desempenho',
              },
            },
            save: 'Salvar',
            service: {
              disableAll: {
                description: 'Use essa chave para habilitar ou desabilitar todos os serviços.',
                title: 'Habilitar ou desabilitar todos os serviços',
              },
              optOut: {
                description: 'Estes serviços são carregados por padrão (mas o você pode optar por não participar).',
                title: '(opt-out)',
              },
              purpose: 'Objetivo',
              purposes: 'Objetivos',
              required: { description: 'Esses serviços são sempre necessários', title: '(sempre necessário)' },
            },
          }
        },
        137: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.',
                title: 'Comutați între toate aplicațiile',
              },
              optOut: {
                description: 'Această aplicație este încărcată în mod implicit (dar puteți renunța)',
                title: '(opt-out)',
              },
              purpose: 'Scop',
              purposes: 'Scopuri',
              required: { description: 'Această aplicație este întotdeauna necesară', title: '(întotdeauna necesar)' },
            },
            close: '',
            close_en: 'Close',
            consentModal: {
              description: 'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
              privacyPolicy: {
                name: 'politica privacy',
                text: 'Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.',
              },
              title: 'Informațiile pe care le colectăm',
            },
            consentNotice: {
              changeDescription: 'Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.',
              description: 'Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Află mai multe',
              privacyPolicy: { name: 'politica privacy' },
            },
            decline: 'Renunță',
            ok: 'OK',
            poweredBy: 'Realizat de Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Salvează',
          }
        },
        227: (e) => {
          e.exports = {
            acceptAll: 'Принять всё',
            acceptSelected: 'Принять выбранные',
            service: {
              disableAll: {
                description: 'Используйте этот переключатель, чтобы включить/отключить все приложения.',
                title: 'Переключить все приложения',
              },
              optOut: {
                description: 'Это приложение включено по умолчанию (но вы можете отказаться)',
                title: '(отказаться)',
              },
              purpose: 'Намерение',
              purposes: 'Намерения',
              required: { description: 'Это обязательное приложение', title: '(всегда обязательный)' },
            },
            close: 'Закрыть',
            consentModal: {
              description: 'Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.',
              privacyPolicy: {
                name: 'Соглашение',
                text: 'Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}.',
              },
              title: 'Информация, которую мы сохраняем',
            },
            consentNotice: {
              changeDescription: 'Со времени вашего последнего визита произошли изменения, обновите своё согласие.',
              description: 'Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Настроить',
              privacyPolicy: { name: 'политика конфиденциальности' },
            },
            decline: 'Отклонить',
            ok: 'Принять',
            poweredBy: 'Работает на Кларо!',
            purposeItem: { service: '', services: '' },
            save: 'Сохранить',
          }
        },
        812: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.',
                title: 'Izmeni sve',
              },
              optOut: {
                description: 'Ova aplikacija je učitana automatski (ali je možete onesposobiti)',
                title: '(onesposobite)',
              },
              purpose: 'Svrha',
              purposes: 'Svrhe',
              required: { description: 'Ova aplikacija je uvek neophodna', title: '(neophodna)' },
            },
            close: 'Zatvori',
            consentModal: {
              description: 'Ovde možete videti i podesiti informacije koje prikupljamo o Vama.',
              privacyPolicy: {
                name: 'politiku privatnosti',
                text: 'Za više informacije pročitajte našu {privacyPolicy}.',
              },
              title: 'Informacije koje prikupljamo',
            },
            consentNotice: {
              changeDescription:
                'Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.',
              description: 'Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Saznajte više',
              privacyPolicy: { name: 'politiku privatnosti' },
            },
            decline: 'Odbij',
            ok: 'U redu',
            poweredBy: 'Pokreće Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Sačuvaj',
          }
        },
        220: (e) => {
          e.exports = {
            consentModal: {
              title: 'Информације које прикупљамо',
              description: 'Овде можете видет и подесити информације које прикупљамо о Вама.\n',
              privacyPolicy: {
                name: 'политику приватности',
                text: 'За више информација прочитајте нашу {privacyPolicy}.\n',
              },
            },
            consentNotice: {
              changeDescription:
                'Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.',
              description: 'Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n',
              learnMore: 'Сазнајте више',
              privacyPolicy: { name: 'политику приватности' },
            },
            ok: 'У реду',
            save: 'Сачувај',
            decline: 'Одбиј',
            close: 'Затвори',
            service: {
              disableAll: {
                title: 'Измени све',
                description: 'Користите овај прекидач да омогућите/онеспособите све апликације одједном.',
              },
              optOut: {
                title: '(онеспособите)',
                description: 'Ова апликација је учитана аутоматски (али је можете онеспособити)',
              },
              required: { title: '(неопходна)', description: 'Ова апликација је увек неопходна.' },
              purposes: 'Сврхе',
              purpose: 'Сврха',
            },
            poweredBy: 'Покреће Кларо!',
          }
        },
        538: (e) => {
          e.exports = {
            acceptAll: 'Acceptera alla',
            acceptSelected: 'Acceptera markerat',
            service: {
              disableAll: {
                description: 'Använd detta reglage för att aktivera/avaktivera samtliga appar.',
                title: 'Ändra för alla appar',
              },
              optOut: {
                description: 'Den här appen laddas som standardinställning (men du kan avaktivera den)',
                title: '(Avaktivera)',
              },
              purpose: 'Syfte',
              purposes: 'Syften',
              required: { description: 'Den här applikationen krävs alltid', title: '(Krävs alltid)' },
            },
            close: 'Stäng',
            consentModal: {
              description: 'Här kan du se och anpassa vilken information vi samlar om dig.',
              privacyPolicy: { name: 'Integritetspolicy', text: 'För att veta mer, läs vår {privacyPolicy}.' },
              title: 'Information som vi samlar',
            },
            consentNotice: {
              title: 'Cookie-samtycke',
              changeDescription:
                'Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.',
              description: 'Vi samlar och bearbetar din personliga data i följande syften: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Läs mer',
              privacyPolicy: { name: 'Integritetspolicy' },
            },
            decline: 'Avböj',
            ok: 'OK',
            poweredBy: 'Körs på Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Spara',
          }
        },
        785: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Toplu açma/kapama için bu düğmeyi kullanabilirsin.',
                title: 'Tüm uygulamaları aç/kapat',
              },
              optOut: {
                description: 'Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)',
                title: '(isteğe bağlı)',
              },
              purpose: 'Amaç',
              purposes: 'Amaçlar',
              required: { description: 'Bu uygulama her zaman gerekli', title: '(her zaman gerekli)' },
            },
            close: 'Kapat',
            consentModal: {
              description: 'Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.',
              privacyPolicy: {
                name: 'Gizlilik Politikası',
                text: 'Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun.',
              },
              title: 'Sakladığımız bilgiler',
            },
            consentNotice: {
              changeDescription: 'Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.',
              description: 'Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Daha fazla bilgi',
              privacyPolicy: { name: 'Gizlilik Politikası' },
            },
            decline: 'Reddet',
            ok: 'Tamam',
            poweredBy: 'Klaro tarafından geliştirildi!',
            purposeItem: { service: '', services: '' },
            save: 'Kaydet',
          }
        },
        898: (e) => {
          e.exports = {
            acceptAll: '照单全收',
            acceptSelected: '接受选择',
            close: '密切',
            consentModal: {
              description:
                '在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。',
              privacyPolicy: { name: '隐私政策', text: '要了解更多，请阅读我们的{privacyPolicy} 。' },
              title: '我们想使用的服务',
            },
            consentNotice: {
              changeDescription: '自上次访问后有变化，请更新您的同意。',
              description: '你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。',
              imprint: { name: '印记' },
              learnMore: '让我来选',
              privacyPolicy: { name: '隐私政策' },
              testing: '测试模式！',
            },
            contextualConsent: {
              acceptAlways: '总是',
              acceptOnce: '是的，是的',
              description: '你想加载由{title} 提供的外部内容吗？',
            },
            decline: '我拒绝',
            ok: '没事的',
            poweredBy: '与Klaro一起实现!',
            privacyPolicy: { name: '隐私政策', text: '要了解更多，请阅读我们的{privacyPolicy} 。' },
            purposeItem: { service: '服务', services: '服务' },
            purposes: {
              advertising: { description: '这些服务处理个人信息，向您展示个性化或基于兴趣的广告。', title: '广告宣传' },
              functional: {
                description:
                  '这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n',
                title: '服务提供',
              },
              marketing: {
                description: '这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。',
                title: '市场营销',
              },
              performance: { description: '这些服务处理个人信息是为了优化本网站提供的服务。\n', title: '性能优化' },
            },
            save: '挽救',
            service: {
              disableAll: { description: '使用此开关可启用或禁用所有服务。', title: '启用或停用所有服务' },
              optOut: { description: '这个服务是默认加载的(但你可以选择退出)', title: '(选择退出)' },
              purpose: '目的',
              purposes: '目的',
              required: { description: '这种服务是必须的', title: '(总是需要)' },
            },
          }
        },
        772: (e, t, n) => {
          'use strict'
          var i = n(331)
          function r() {}
          function o() {}
          ;(o.resetWarningCache = r),
            (e.exports = function () {
              function e(e, t, n, r, o, a) {
                if (a !== i) {
                  var s = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
                  throw ((s.name = 'Invariant Violation'), s)
                }
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: r,
              }
              return (n.PropTypes = n), n
            })
        },
        615: (e, t, n) => {
          e.exports = n(772)()
        },
        331: (e) => {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
      },
      t = {}
    function n(i) {
      var r = t[i]
      if (void 0 !== r) return r.exports
      var o = (t[i] = { exports: {} })
      return e[i](o, o.exports, n), o.exports
    }
    ;(n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
      (n.d = (e, t) => {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] })
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })
    var i = {}
    return (
      (() => {
        'use strict'
        n.r(i),
          n.d(i, {
            addEventListener: () => Ln,
            defaultConfig: () => xn,
            defaultTranslations: () => In,
            getConfigTranslations: () => Vn,
            getElement: () => Hn,
            getElementID: () => Un,
            getManager: () => ei,
            language: () => Ce,
            render: () => Fn,
            renderContextualConsentNotices: () => $n,
            resetManagers: () => Xn,
            setup: () => Qn,
            show: () => Jn,
            updateConfig: () => kt,
            validateConfig: () => Gn,
            version: () => ti,
          })
        var e,
          t,
          r,
          o,
          a,
          s,
          c = {},
          l = [],
          u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
        function p(e, t) {
          for (var n in t) e[n] = t[n]
          return e
        }
        function d(e) {
          var t = e.parentNode
          t && t.removeChild(e)
        }
        function f(t, n, i) {
          var r,
            o,
            a,
            s = {}
          for (a in n) 'key' == a ? (r = n[a]) : 'ref' == a ? (o = n[a]) : (s[a] = n[a])
          if (
            (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : i),
            'function' == typeof t && null != t.defaultProps)
          )
            for (a in t.defaultProps) void 0 === s[a] && (s[a] = t.defaultProps[a])
          return v(t, s, r, o, null)
        }
        function v(e, n, i, o, a) {
          var s = {
            type: e,
            props: n,
            key: i,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++r : a,
          }
          return null == a && null != t.vnode && t.vnode(s), s
        }
        function m(e) {
          return e.children
        }
        function y(e, t) {
          ;(this.props = e), (this.context = t)
        }
        function h(e, t) {
          if (null == t) return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null
          for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e
          return 'function' == typeof e.type ? h(e) : null
        }
        function b(e) {
          var t, n
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e
                break
              }
            return b(e)
          }
        }
        function g(e) {
          ;((!e.__d && (e.__d = !0) && o.push(e) && !_.__r++) || s !== t.debounceRendering) &&
            ((s = t.debounceRendering) || a)(_)
        }
        function _() {
          for (var e; (_.__r = o.length); )
            (e = o.sort(function (e, t) {
              return e.__v.__b - t.__v.__b
            })),
              (o = []),
              e.some(function (e) {
                var t, n, i, r, o, a
                e.__d &&
                  ((o = (r = (t = e).__v).__e),
                  (a = t.__P) &&
                    ((n = []),
                    ((i = p({}, r)).__v = r.__v + 1),
                    x(
                      a,
                      r,
                      i,
                      t.__n,
                      void 0 !== a.ownerSVGElement,
                      null != r.__h ? [o] : null,
                      n,
                      null == o ? h(r) : o,
                      r.__h
                    ),
                    C(n, r),
                    r.__e != o && b(r)))
              })
        }
        function k(e, t, n, i, r, o, a, s, u, p) {
          var d,
            f,
            y,
            b,
            g,
            _,
            k,
            j = (i && i.__k) || l,
            O = j.length
          for (n.__k = [], d = 0; d < t.length; d++)
            if (
              null !=
              (b = n.__k[d] =
                null == (b = t[d]) || 'boolean' == typeof b
                  ? null
                  : 'string' == typeof b || 'number' == typeof b || 'bigint' == typeof b
                  ? v(null, b, null, null, b)
                  : Array.isArray(b)
                  ? v(m, { children: b }, null, null, null)
                  : b.__b > 0
                  ? v(b.type, b.props, b.key, null, b.__v)
                  : b)
            ) {
              if (((b.__ = n), (b.__b = n.__b + 1), null === (y = j[d]) || (y && b.key == y.key && b.type === y.type)))
                j[d] = void 0
              else
                for (f = 0; f < O; f++) {
                  if ((y = j[f]) && b.key == y.key && b.type === y.type) {
                    j[f] = void 0
                    break
                  }
                  y = null
                }
              x(e, b, (y = y || c), r, o, a, s, u, p),
                (g = b.__e),
                (f = b.ref) && y.ref != f && (k || (k = []), y.ref && k.push(y.ref, null, b), k.push(f, b.__c || g, b)),
                null != g
                  ? (null == _ && (_ = g),
                    'function' == typeof b.type && b.__k === y.__k
                      ? (b.__d = u = w(b, u, e))
                      : (u = z(e, b, y, j, g, u)),
                    'function' == typeof n.type && (n.__d = u))
                  : u && y.__e == u && u.parentNode != e && (u = h(y))
            }
          for (n.__e = _, d = O; d--; )
            null != j[d] &&
              ('function' == typeof n.type && null != j[d].__e && j[d].__e == n.__d && (n.__d = h(i, d + 1)),
              N(j[d], j[d]))
          if (k) for (d = 0; d < k.length; d++) D(k[d], k[++d], k[++d])
        }
        function w(e, t, n) {
          for (var i, r = e.__k, o = 0; r && o < r.length; o++)
            (i = r[o]) && ((i.__ = e), (t = 'function' == typeof i.type ? w(i, t, n) : z(n, i, i, r, i.__e, t)))
          return t
        }
        function j(e, t) {
          return (
            (t = t || []),
            null == e ||
              'boolean' == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    j(e, t)
                  })
                : t.push(e)),
            t
          )
        }
        function z(e, t, n, i, r, o) {
          var a, s, c
          if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0)
          else if (null == n || r != o || null == r.parentNode)
            e: if (null == o || o.parentNode !== e) e.appendChild(r), (a = null)
            else {
              for (s = o, c = 0; (s = s.nextSibling) && c < i.length; c += 2) if (s == r) break e
              e.insertBefore(r, o), (a = o)
            }
          return void 0 !== a ? a : r.nextSibling
        }
        function O(e, t, n) {
          '-' === t[0]
            ? e.setProperty(t, n)
            : (e[t] = null == n ? '' : 'number' != typeof n || u.test(t) ? n : n + 'px')
        }
        function A(e, t, n, i, r) {
          var o
          e: if ('style' === t)
            if ('string' == typeof n) e.style.cssText = n
            else {
              if (('string' == typeof i && (e.style.cssText = i = ''), i))
                for (t in i) (n && t in n) || O(e.style, t, '')
              if (n) for (t in n) (i && n[t] === i[t]) || O(e.style, t, n[t])
            }
          else if ('o' === t[0] && 'n' === t[1])
            (o = t !== (t = t.replace(/Capture$/, ''))),
              (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + o] = n),
              n ? i || e.addEventListener(t, o ? S : P, o) : e.removeEventListener(t, o ? S : P, o)
          else if ('dangerouslySetInnerHTML' !== t) {
            if (r) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's')
            else if ('href' !== t && 'list' !== t && 'form' !== t && 'tabIndex' !== t && 'download' !== t && t in e)
              try {
                e[t] = null == n ? '' : n
                break e
              } catch (e) {}
            'function' == typeof n ||
              (null != n && (!1 !== n || ('a' === t[0] && 'r' === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t))
          }
        }
        function P(e) {
          this.l[e.type + !1](t.event ? t.event(e) : e)
        }
        function S(e) {
          this.l[e.type + !0](t.event ? t.event(e) : e)
        }
        function x(e, n, i, r, o, a, s, c, l) {
          var u,
            d,
            f,
            v,
            h,
            b,
            g,
            _,
            w,
            j,
            z,
            O = n.type
          if (void 0 !== n.constructor) return null
          null != i.__h && ((l = i.__h), (c = n.__e = i.__e), (n.__h = null), (a = [c])), (u = t.__b) && u(n)
          try {
            e: if ('function' == typeof O) {
              if (
                ((_ = n.props),
                (w = (u = O.contextType) && r[u.__c]),
                (j = u ? (w ? w.props.value : u.__) : r),
                i.__c
                  ? (g = (d = n.__c = i.__c).__ = d.__E)
                  : ('prototype' in O && O.prototype.render
                      ? (n.__c = d = new O(_, j))
                      : ((n.__c = d = new y(_, j)), (d.constructor = O), (d.render = q)),
                    w && w.sub(d),
                    (d.props = _),
                    d.state || (d.state = {}),
                    (d.context = j),
                    (d.__n = r),
                    (f = d.__d = !0),
                    (d.__h = [])),
                null == d.__s && (d.__s = d.state),
                null != O.getDerivedStateFromProps &&
                  (d.__s == d.state && (d.__s = p({}, d.__s)), p(d.__s, O.getDerivedStateFromProps(_, d.__s))),
                (v = d.props),
                (h = d.state),
                f)
              )
                null == O.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                  null != d.componentDidMount && d.__h.push(d.componentDidMount)
              else {
                if (
                  (null == O.getDerivedStateFromProps &&
                    _ !== v &&
                    null != d.componentWillReceiveProps &&
                    d.componentWillReceiveProps(_, j),
                  (!d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, j)) ||
                    n.__v === i.__v)
                ) {
                  ;(d.props = _),
                    (d.state = d.__s),
                    n.__v !== i.__v && (d.__d = !1),
                    (d.__v = n),
                    (n.__e = i.__e),
                    (n.__k = i.__k),
                    n.__k.forEach(function (e) {
                      e && (e.__ = n)
                    }),
                    d.__h.length && s.push(d)
                  break e
                }
                null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, j),
                  null != d.componentDidUpdate &&
                    d.__h.push(function () {
                      d.componentDidUpdate(v, h, b)
                    })
              }
              ;(d.context = j),
                (d.props = _),
                (d.state = d.__s),
                (u = t.__r) && u(n),
                (d.__d = !1),
                (d.__v = n),
                (d.__P = e),
                (u = d.render(d.props, d.state, d.context)),
                (d.state = d.__s),
                null != d.getChildContext && (r = p(p({}, r), d.getChildContext())),
                f || null == d.getSnapshotBeforeUpdate || (b = d.getSnapshotBeforeUpdate(v, h)),
                (z = null != u && u.type === m && null == u.key ? u.props.children : u),
                k(e, Array.isArray(z) ? z : [z], n, i, r, o, a, s, c, l),
                (d.base = n.__e),
                (n.__h = null),
                d.__h.length && s.push(d),
                g && (d.__E = d.__ = null),
                (d.__e = !1)
            } else
              null == a && n.__v === i.__v
                ? ((n.__k = i.__k), (n.__e = i.__e))
                : (n.__e = E(i.__e, n, i, r, o, a, s, l))
            ;(u = t.diffed) && u(n)
          } catch (e) {
            ;(n.__v = null), (l || null != a) && ((n.__e = c), (n.__h = !!l), (a[a.indexOf(c)] = null)), t.__e(e, n, i)
          }
        }
        function C(e, n) {
          t.__c && t.__c(n, e),
            e.some(function (n) {
              try {
                ;(e = n.__h),
                  (n.__h = []),
                  e.some(function (e) {
                    e.call(n)
                  })
              } catch (e) {
                t.__e(e, n.__v)
              }
            })
        }
        function E(t, n, i, r, o, a, s, l) {
          var u,
            p,
            f,
            v = i.props,
            m = n.props,
            y = n.type,
            b = 0
          if (('svg' === y && (o = !0), null != a))
            for (; b < a.length; b++)
              if ((u = a[b]) && 'setAttribute' in u == !!y && (y ? u.localName === y : 3 === u.nodeType)) {
                ;(t = u), (a[b] = null)
                break
              }
          if (null == t) {
            if (null === y) return document.createTextNode(m)
            ;(t = o ? document.createElementNS('http://www.w3.org/2000/svg', y) : document.createElement(y, m.is && m)),
              (a = null),
              (l = !1)
          }
          if (null === y) v === m || (l && t.data === m) || (t.data = m)
          else {
            if (
              ((a = a && e.call(t.childNodes)),
              (p = (v = i.props || c).dangerouslySetInnerHTML),
              (f = m.dangerouslySetInnerHTML),
              !l)
            ) {
              if (null != a)
                for (v = {}, b = 0; b < t.attributes.length; b++) v[t.attributes[b].name] = t.attributes[b].value
              ;(f || p) &&
                ((f && ((p && f.__html == p.__html) || f.__html === t.innerHTML)) ||
                  (t.innerHTML = (f && f.__html) || ''))
            }
            if (
              ((function (e, t, n, i, r) {
                var o
                for (o in n) 'children' === o || 'key' === o || o in t || A(e, o, null, n[o], i)
                for (o in t)
                  (r && 'function' != typeof t[o]) ||
                    'children' === o ||
                    'key' === o ||
                    'value' === o ||
                    'checked' === o ||
                    n[o] === t[o] ||
                    A(e, o, t[o], n[o], i)
              })(t, m, v, o, l),
              f)
            )
              n.__k = []
            else if (
              ((b = n.props.children),
              k(
                t,
                Array.isArray(b) ? b : [b],
                n,
                i,
                r,
                o && 'foreignObject' !== y,
                a,
                s,
                a ? a[0] : i.__k && h(i, 0),
                l
              ),
              null != a)
            )
              for (b = a.length; b--; ) null != a[b] && d(a[b])
            l ||
              ('value' in m &&
                void 0 !== (b = m.value) &&
                (b !== t.value || ('progress' === y && !b) || ('option' === y && b !== v.value)) &&
                A(t, 'value', b, v.value, !1),
              'checked' in m && void 0 !== (b = m.checked) && b !== t.checked && A(t, 'checked', b, v.checked, !1))
          }
          return t
        }
        function D(e, n, i) {
          try {
            'function' == typeof e ? e(n) : (e.current = n)
          } catch (e) {
            t.__e(e, i)
          }
        }
        function N(e, n, i) {
          var r, o
          if (
            (t.unmount && t.unmount(e),
            (r = e.ref) && ((r.current && r.current !== e.__e) || D(r, null, n)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount()
              } catch (e) {
                t.__e(e, n)
              }
            r.base = r.__P = null
          }
          if ((r = e.__k)) for (o = 0; o < r.length; o++) r[o] && N(r[o], n, 'function' != typeof e.type)
          i || null == e.__e || d(e.__e), (e.__e = e.__d = void 0)
        }
        function q(e, t, n) {
          return this.constructor(e, n)
        }
        function M(n, i, r) {
          var o, a, s
          t.__ && t.__(n, i),
            (a = (o = 'function' == typeof r) ? null : (r && r.__k) || i.__k),
            (s = []),
            x(
              i,
              (n = ((!o && r) || i).__k = f(m, null, [n])),
              a || c,
              c,
              void 0 !== i.ownerSVGElement,
              !o && r ? [r] : a ? null : i.firstChild ? e.call(i.childNodes) : null,
              s,
              !o && r ? r : a ? a.__e : i.firstChild,
              o
            ),
            C(s, n)
        }
        ;(e = l.slice),
          (t = {
            __e: function (e, t) {
              for (var n, i, r; (t = t.__); )
                if ((n = t.__c) && !n.__)
                  try {
                    if (
                      ((i = n.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (n.setState(i.getDerivedStateFromError(e)), (r = n.__d)),
                      null != n.componentDidCatch && (n.componentDidCatch(e), (r = n.__d)),
                      r)
                    )
                      return (n.__E = n)
                  } catch (t) {
                    e = t
                  }
              throw e
            },
          }),
          (r = 0),
          (y.prototype.setState = function (e, t) {
            var n
            ;(n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = p({}, this.state))),
              'function' == typeof e && (e = e(p({}, n), this.props)),
              e && p(n, e),
              null != e && this.__v && (t && this.__h.push(t), g(this))
          }),
          (y.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), g(this))
          }),
          (y.prototype.render = m),
          (o = []),
          (a = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
          (_.__r = 0)
        var T,
          I,
          R,
          B = 0,
          U = [],
          H = t.__b,
          L = t.__r,
          K = t.diffed,
          V = t.__c,
          W = t.unmount
        function F(e, n) {
          t.__h && t.__h(I, e, B || n), (B = 0)
          var i = I.__H || (I.__H = { __: [], __h: [] })
          return e >= i.__.length && i.__.push({}), i.__[e]
        }
        function $(e) {
          return (
            (B = 1),
            (function (e, t, n) {
              var i = F(T++, 2)
              return (
                (i.t = e),
                i.__c ||
                  ((i.__ = [
                    n ? n(t) : Y(void 0, t),
                    function (e) {
                      var t = i.t(i.__[0], e)
                      i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}))
                    },
                  ]),
                  (i.__c = I)),
                i.__
              )
            })(Y, e)
          )
        }
        function Z() {
          for (var e; (e = U.shift()); )
            if (e.__P)
              try {
                e.__H.__h.forEach(Q), e.__H.__h.forEach(J), (e.__H.__h = [])
              } catch (n) {
                ;(e.__H.__h = []), t.__e(n, e.__v)
              }
        }
        ;(t.__b = function (e) {
          ;(I = null), H && H(e)
        }),
          (t.__r = function (e) {
            L && L(e), (T = 0)
            var t = (I = e.__c).__H
            t && (t.__h.forEach(Q), t.__h.forEach(J), (t.__h = []))
          }),
          (t.diffed = function (e) {
            K && K(e)
            var n = e.__c
            n &&
              n.__H &&
              n.__H.__h.length &&
              ((1 !== U.push(n) && R === t.requestAnimationFrame) ||
                (
                  (R = t.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(i), G && cancelAnimationFrame(t), setTimeout(e)
                      },
                      i = setTimeout(n, 100)
                    G && (t = requestAnimationFrame(n))
                  }
                )(Z)),
              (I = null)
          }),
          (t.__c = function (e, n) {
            n.some(function (e) {
              try {
                e.__h.forEach(Q),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || J(e)
                  }))
              } catch (i) {
                n.some(function (e) {
                  e.__h && (e.__h = [])
                }),
                  (n = []),
                  t.__e(i, e.__v)
              }
            }),
              V && V(e, n)
          }),
          (t.unmount = function (e) {
            W && W(e)
            var n,
              i = e.__c
            i &&
              i.__H &&
              (i.__H.__.forEach(function (e) {
                try {
                  Q(e)
                } catch (e) {
                  n = e
                }
              }),
              n && t.__e(n, i.__v))
          })
        var G = 'function' == typeof requestAnimationFrame
        function Q(e) {
          var t = I,
            n = e.__c
          'function' == typeof n && ((e.__c = void 0), n()), (I = t)
        }
        function J(e) {
          var t = I
          ;(e.__c = e.__()), (I = t)
        }
        function Y(e, t) {
          return 'function' == typeof t ? t(e) : t
        }
        function X(e, t) {
          for (var n in e) if ('__source' !== n && !(n in t)) return !0
          for (var i in t) if ('__source' !== i && e[i] !== t[i]) return !0
          return !1
        }
        function ee(e) {
          this.props = e
        }
        ;((ee.prototype = new y()).isPureReactComponent = !0),
          (ee.prototype.shouldComponentUpdate = function (e, t) {
            return X(this.props, e) || X(this.state, t)
          })
        var te = t.__b
        ;(t.__b = function (e) {
          e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), te && te(e)
        }),
          'undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')
        var ne = t.__e
        t.__e = function (e, t, n) {
          if (e.then)
            for (var i, r = t; (r = r.__); )
              if ((i = r.__c) && i.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t)
          ne(e, t, n)
        }
        var ie = t.unmount
        function re() {
          ;(this.__u = 0), (this.t = null), (this.__b = null)
        }
        function oe(e) {
          var t = e.__.__c
          return t && t.__e && t.__e(e)
        }
        function ae() {
          ;(this.u = null), (this.o = null)
        }
        ;(t.unmount = function (e) {
          var t = e.__c
          t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), ie && ie(e)
        }),
          ((re.prototype = new y()).__c = function (e, t) {
            var n = t.__c,
              i = this
            null == i.t && (i.t = []), i.t.push(n)
            var r = oe(i.__v),
              o = !1,
              a = function () {
                o || ((o = !0), (n.__R = null), r ? r(s) : s())
              }
            n.__R = a
            var s = function () {
                if (!--i.__u) {
                  if (i.state.__e) {
                    var e = i.state.__e
                    i.__v.__k[0] = (function e(t, n, i) {
                      return (
                        t &&
                          ((t.__v = null),
                          (t.__k =
                            t.__k &&
                            t.__k.map(function (t) {
                              return e(t, n, i)
                            })),
                          t.__c &&
                            t.__c.__P === n &&
                            (t.__e && i.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = i))),
                        t
                      )
                    })(e, e.__c.__P, e.__c.__O)
                  }
                  var t
                  for (i.setState({ __e: (i.__b = null) }); (t = i.t.pop()); ) t.forceUpdate()
                }
              },
              c = !0 === t.__h
            i.__u++ || c || i.setState({ __e: (i.__b = i.__v.__k[0]) }), e.then(a, a)
          }),
          (re.prototype.componentWillUnmount = function () {
            this.t = []
          }),
          (re.prototype.render = function (e, t) {
            if (this.__b) {
              if (this.__v.__k) {
                var n = document.createElement('div'),
                  i = this.__v.__k[0].__c
                this.__v.__k[0] = (function e(t, n, i) {
                  return (
                    t &&
                      (t.__c &&
                        t.__c.__H &&
                        (t.__c.__H.__.forEach(function (e) {
                          'function' == typeof e.__c && e.__c()
                        }),
                        (t.__c.__H = null)),
                      null !=
                        (t = (function (e, t) {
                          for (var n in t) e[n] = t[n]
                          return e
                        })({}, t)).__c && (t.__c.__P === i && (t.__c.__P = n), (t.__c = null)),
                      (t.__k =
                        t.__k &&
                        t.__k.map(function (t) {
                          return e(t, n, i)
                        }))),
                    t
                  )
                })(this.__b, n, (i.__O = i.__P))
              }
              this.__b = null
            }
            var r = t.__e && f(m, null, e.fallback)
            return r && (r.__h = null), [f(m, null, t.__e ? null : e.children), r]
          })
        var se = function (e, t, n) {
          if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size)))
            for (n = e.u; n; ) {
              for (; n.length > 3; ) n.pop()()
              if (n[1] < n[0]) break
              e.u = n = n[2]
            }
        }
        ;((ae.prototype = new y()).__e = function (e) {
          var t = this,
            n = oe(t.__v),
            i = t.o.get(e)
          return (
            i[0]++,
            function (r) {
              var o = function () {
                t.props.revealOrder ? (i.push(r), se(t, e, i)) : r()
              }
              n ? n(o) : o()
            }
          )
        }),
          (ae.prototype.render = function (e) {
            ;(this.u = null), (this.o = new Map())
            var t = j(e.children)
            e.revealOrder && 'b' === e.revealOrder[0] && t.reverse()
            for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]))
            return e.children
          }),
          (ae.prototype.componentDidUpdate = ae.prototype.componentDidMount =
            function () {
              var e = this
              this.o.forEach(function (t, n) {
                se(e, n, t)
              })
            })
        var ce = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
          le =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          ue = 'undefined' != typeof document,
          pe = function (e) {
            return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(
              e
            )
          }
        function de(e, t, n) {
          return null == t.__k && (t.textContent = ''), M(e, t), 'function' == typeof n && n(), e ? e.__c : null
        }
        ;(y.prototype.isReactComponent = {}),
          ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
            Object.defineProperty(y.prototype, e, {
              configurable: !0,
              get: function () {
                return this['UNSAFE_' + e]
              },
              set: function (t) {
                Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t })
              },
            })
          })
        var fe = t.event
        function ve() {}
        function me() {
          return this.cancelBubble
        }
        function ye() {
          return this.defaultPrevented
        }
        t.event = function (e) {
          return (
            fe && (e = fe(e)),
            (e.persist = ve),
            (e.isPropagationStopped = me),
            (e.isDefaultPrevented = ye),
            (e.nativeEvent = e)
          )
        }
        var he = {
            configurable: !0,
            get: function () {
              return this.class
            },
          },
          be = t.vnode
        t.vnode = function (e) {
          var t = e.type,
            n = e.props,
            i = n
          if ('string' == typeof t) {
            var r = -1 === t.indexOf('-')
            for (var o in ((i = {}), n)) {
              var a = n[o]
              ;(ue && 'children' === o && 'noscript' === t) ||
                ('value' === o && 'defaultValue' in n && null == a) ||
                ('defaultValue' === o && 'value' in n && null == n.value
                  ? (o = 'value')
                  : 'download' === o && !0 === a
                  ? (a = '')
                  : /ondoubleclick/i.test(o)
                  ? (o = 'ondblclick')
                  : /^onchange(textarea|input)/i.test(o + t) && !pe(n.type)
                  ? (o = 'oninput')
                  : /^onfocus$/i.test(o)
                  ? (o = 'onfocusin')
                  : /^onblur$/i.test(o)
                  ? (o = 'onfocusout')
                  : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
                  ? (o = o.toLowerCase())
                  : r && le.test(o)
                  ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
                  : null === a && (a = void 0),
                (i[o] = a))
            }
            'select' == t &&
              i.multiple &&
              Array.isArray(i.value) &&
              (i.value = j(n.children).forEach(function (e) {
                e.props.selected = -1 != i.value.indexOf(e.props.value)
              })),
              'select' == t &&
                null != i.defaultValue &&
                (i.value = j(n.children).forEach(function (e) {
                  e.props.selected = i.multiple
                    ? -1 != i.defaultValue.indexOf(e.props.value)
                    : i.defaultValue == e.props.value
                })),
              (e.props = i),
              n.class != n.className &&
                ((he.enumerable = 'className' in n),
                null != n.className && (i.class = n.className),
                Object.defineProperty(i, 'className', he))
          }
          ;(e.$$typeof = ce), be && be(e)
        }
        var ge = t.__r
        t.__r = function (e) {
          ge && ge(e), e.__c
        }
        const _e = f,
          ke = m,
          we = y
        var je = n(615),
          ze = function (e) {
            var t = e.t
            return _e(
              'svg',
              {
                role: 'img',
                'aria-label': t(['close']),
                width: '12',
                height: '12',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              _e('title', null, t(['close'])),
              _e('line', { x1: '1', y1: '11', x2: '11', y2: '1', strokeWidth: '1' }),
              _e('line', { x1: '1', y1: '1', x2: '11', y2: '11', strokeWidth: '1' })
            )
          }
        function Oe(e) {
          return e
            .split('-')
            .map(function (e) {
              return e.slice(0, 1).toUpperCase() + e.slice(1)
            })
            .join(' ')
        }
        function Ae(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Pe(e)
            })(e) ||
            (function (e) {
              if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                return Array.from(e)
            })(e) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return Pe(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Pe(e, t)
                    : void 0
                )
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Pe(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function Se(e) {
          return (
            (Se =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Se(e)
          )
        }
        ze.propTypes = { t: n.n(je)().func }
        var xe = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]
          var r,
            o = Se(n[0])
          r = 0 === n.length ? {} : 'string' === o || 'number' === o ? Array.prototype.slice.call(n) : n[0]
          for (var a = [], s = e.toString(); s.length > 0; ) {
            var c = s.match(/\{(?!\{)([\w\d]+)\}(?!\})/)
            if (null !== c) {
              var l = s.substr(0, c.index)
              s = s.substr(c.index + c[0].length)
              var u = parseInt(c[1])
              a.push(l), u != u ? a.push(r[c[1]]) : a.push(r[u])
            } else a.push(s), (s = '')
          }
          return a
        }
        function Ce(e) {
          if (void 0 !== e && void 0 !== e.lang && 'zz' !== e.lang) return e.lang
          var t = (
              ('string' == typeof window.language ? window.language : null) ||
              document.documentElement.lang ||
              (void 0 !== e && void 0 !== e.languages && void 0 !== e.languages[0] ? e.languages[0] : 'en')
            ).toLowerCase(),
            n = new RegExp('^([\\w]+)-([\\w]+)$').exec(t)
          return null === n ? t : n[1]
        }
        function Ee(e, t, n) {
          var i = t
          Array.isArray(i) || (i = [i])
          for (var r = e, o = 0; o < i.length; o++) {
            if (void 0 === r) return n
            if (void 0 !== i[o] && i[o].endsWith('?')) {
              var a,
                s = i[o].slice(0, i[o].length - 1)
              void 0 !== (a = r instanceof Map ? r.get(s) : r[s]) && 'string' == typeof a && (r = a)
            } else r = r instanceof Map ? r.get(i[o]) : r[i[o]]
          }
          return void 0 === r || 'string' != typeof r ? n : '' !== r ? r : void 0
        }
        function De(e, t, n, i) {
          var r = i,
            o = !1
          '!' === r[0] && ((r = r.slice(1)), (o = !0)), Array.isArray(r) || (r = [r])
          var a = Ee(e, [t].concat(Ae(r)))
          if ((void 0 === a && void 0 !== n && (a = Ee(e, [n].concat(Ae(r)))), void 0 === a)) {
            if (o) return
            return ['[missing translation: '.concat(t, '/').concat(r.join('/'), ']')]
          }
          for (var s = arguments.length, c = new Array(s > 4 ? s - 4 : 0), l = 4; l < s; l++) c[l - 4] = arguments[l]
          return c.length > 0 ? xe.apply(void 0, [a].concat(c)) : a
        }
        const Ne = function (e) {
          var t = e.text,
            n = e.config
          if ((t instanceof Array || (t = [t]), !0 === n.htmlTexts)) {
            var i = !1
            '<' === t[0][0] && (i = !0)
            var r = t.map(function (e, t) {
              return 'string' == typeof e ? _e('span', { key: t, dangerouslySetInnerHTML: { __html: e } }) : e
            })
            return _e(i ? ke : 'span', null, r)
          }
          return _e('span', null, t)
        }
        function qe(e) {
          return (
            (qe =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            qe(e)
          )
        }
        function Me() {
          return (
            (Me =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
              }),
            Me.apply(this, arguments)
          )
        }
        function Te(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Ie(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function Re(e, t) {
          return (
            (Re =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Re(e, t)
          )
        }
        function Be(e, t) {
          if (t && ('object' === qe(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Ue(e) {
          return (
            (Ue = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Ue(e)
          )
        }
        var He = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Re(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = Ue(i)
                if (r) {
                  var n = Ue(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return Be(this, e)
              })
          function a() {
            return Te(this, a), o.apply(this, arguments)
          }
          return (
            (t = a),
            (n = [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.checked,
                    i = t.onlyRequiredEnabled,
                    r = t.onToggle,
                    o = t.name,
                    a = t.lang,
                    s = t.config,
                    c = t.translations,
                    l = t.title,
                    u = t.description,
                    p = t.visible,
                    d = t.t,
                    f = this.props.required || !1,
                    v = this.props.optOut || !1,
                    m = this.props.purposes || [],
                    y = 'service-item-'.concat(o),
                    h = ''.concat(y, '-title'),
                    b = m
                      .map(function (e) {
                        return d(['!', 'purposes', e, 'title?']) || Oe(e)
                      })
                      .join(', '),
                    g = v
                      ? _e(
                          'span',
                          { className: 'cm-opt-out', title: d(['service', 'optOut', 'description']) },
                          d(['service', 'optOut', 'title'])
                        )
                      : '',
                    _ = f
                      ? _e(
                          'span',
                          { className: 'cm-required', title: d(['service', 'required', 'description']) },
                          d(['service', 'required', 'title'])
                        )
                      : ''
                  m.length > 0 &&
                    (e = _e(
                      'p',
                      { className: 'purposes' },
                      d(['service', m.length > 1 ? 'purposes' : 'purpose']),
                      ': ',
                      b
                    ))
                  var k = u || De(c, a, 'zz', ['!', 'description']) || d(['!', o, 'description?'])
                  return _e(
                    'div',
                    null,
                    _e('input', {
                      id: y,
                      className: 'cm-list-input' + (f ? ' required' : '') + (i ? ' half-checked only-required' : ''),
                      'aria-labelledby': ''.concat(h),
                      'aria-describedby': ''.concat(y, '-description'),
                      disabled: f,
                      checked: n || f,
                      tabIndex: p ? '0' : '-1',
                      type: 'checkbox',
                      onChange: function (e) {
                        r(e.target.checked)
                      },
                    }),
                    _e(
                      'label',
                      Me({ htmlFor: y, className: 'cm-list-label' }, f ? { tabIndex: '0' } : {}),
                      _e(
                        'span',
                        { className: 'cm-list-title', id: ''.concat(h) },
                        l || De(c, a, 'zz', ['!', 'title']) || d(['!', o, 'title?']) || Oe(o)
                      ),
                      _,
                      g,
                      _e('span', { className: 'cm-switch' }, _e('div', { className: 'slider round active' }))
                    ),
                    _e(
                      'div',
                      { id: ''.concat(y, '-description') },
                      k && _e('p', { className: 'cm-list-description' }, _e(Ne, { config: s, text: k })),
                      e
                    )
                  )
                },
              },
            ]),
            n && Ie(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function Le(e) {
          return (
            (Le =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Le(e)
          )
        }
        function Ke(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function Ve(e, t) {
          return (
            (Ve =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Ve(e, t)
          )
        }
        function We(e, t) {
          if (t && ('object' === Le(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Fe(e)
        }
        function Fe(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function $e(e) {
          return (
            ($e = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            $e(e)
          )
        }
        function Ze() {
          return (
            (Ze =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
              }),
            Ze.apply(this, arguments)
          )
        }
        var Ge = function (e) {
            var t = e.services,
              n = e.config,
              i = e.consents,
              r = e.lang,
              o = e.toggle,
              a = e.visible,
              s = e.t
            return t.map(function (e) {
              var t = i[e.name]
              return _e(
                'li',
                { key: e.name, className: 'cm-service' },
                _e(
                  He,
                  Ze(
                    {
                      checked: t || e.required,
                      onToggle: function (t) {
                        o([e], t)
                      },
                      config: n,
                      lang: r,
                      visible: a,
                      t: s,
                    },
                    e
                  )
                )
              )
            })
          },
          Qe = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && Ve(e, t)
            })(a, e)
            var t,
              n,
              i,
              r,
              o =
                ((i = a),
                (r = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                  } catch (e) {
                    return !1
                  }
                })()),
                function () {
                  var e,
                    t = $e(i)
                  if (r) {
                    var n = $e(this).constructor
                    e = Reflect.construct(t, arguments, n)
                  } else e = t.apply(this, arguments)
                  return We(this, e)
                })
            function a(e) {
              var t
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                })(this, a),
                (t = o.call(this, e)),
                e.manager.watch(Fe(t)),
                (t.state = { consents: e.manager.consents }),
                t
              )
            }
            return (
              (t = a),
              (n = [
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.manager.unwatch(this)
                  },
                },
                {
                  key: 'update',
                  value: function (e, t, n) {
                    e === this.props.manager && 'consents' === t && this.setState({ consents: n })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.config,
                      n = e.t,
                      i = e.manager,
                      r = e.lang,
                      o = this.state.consents,
                      a = t.services,
                      s = function (e, t) {
                        e.map(function (e) {
                          e.required || i.updateConsent(e.name, t)
                        })
                      },
                      c = _e(Ge, { config: t, lang: r, services: a, t: n, consents: o, toggle: s }),
                      l = a.filter(function (e) {
                        return !e.required
                      }),
                      u = l.filter(function (e) {
                        return o[e.name]
                      }).length,
                      p = a.filter(function (e) {
                        return e.required
                      }).length,
                      d = u === l.length
                    return (
                      a.filter(function (e) {
                        return e.required
                      }).length,
                      _e(
                        'ul',
                        { className: 'cm-services' },
                        c,
                        !t.hideToggleAll &&
                          l.length > 1 &&
                          _e(
                            'li',
                            { className: 'cm-service cm-toggle-all' },
                            _e(He, {
                              name: 'disableAll',
                              title: n(['service', 'disableAll', 'title']),
                              description: n(['service', 'disableAll', 'description']),
                              checked: d,
                              config: t,
                              onlyRequiredEnabled: !d && p > 0,
                              onToggle: function (e) {
                                s(a, e)
                              },
                              lang: r,
                              t: n,
                            })
                          )
                      )
                    )
                  },
                },
              ]),
              n && Ke(t.prototype, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              a
            )
          })(we)
        function Je(e) {
          return (
            (Je =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Je(e)
          )
        }
        function Ye() {
          return (
            (Ye =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
              }),
            Ye.apply(this, arguments)
          )
        }
        function Xe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function et(e, t) {
          return (
            (et =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            et(e, t)
          )
        }
        function tt(e, t) {
          if (t && ('object' === Je(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function nt(e) {
          return (
            (nt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            nt(e)
          )
        }
        var it = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && et(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = nt(i)
                if (r) {
                  var n = nt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return tt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              ((t = o.call(this, e)).state = { servicesVisible: !1 }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    i = n.allEnabled,
                    r = n.onlyRequiredEnabled,
                    o = n.allDisabled,
                    a = n.services,
                    s = n.config,
                    c = n.onToggle,
                    l = n.name,
                    u = n.lang,
                    p = n.manager,
                    d = n.consents,
                    f = n.title,
                    v = n.description,
                    m = n.t,
                    y = this.state.servicesVisible,
                    h = this.props.required || !1,
                    b = this.props.purposes || [],
                    g = 'purpose-item-'.concat(l),
                    _ = ''.concat(g, '-title'),
                    k = b
                      .map(function (e) {
                        return m(['!', 'purposes', e, 'title?']) || Oe(e)
                      })
                      .join(', '),
                    w = h
                      ? _e(
                          'span',
                          { className: 'cm-required', title: m(['!', 'service', 'required', 'description']) || '' },
                          m(['service', 'required', 'title'])
                        )
                      : ''
                  b.length > 0 &&
                    (e = _e(
                      'p',
                      { className: 'purposes' },
                      m(['purpose', b.length > 1 ? 'purposes' : 'purpose']),
                      ': ',
                      k
                    ))
                  var j = function (e) {
                      e.preventDefault()
                      var n = 'false' !== e.currentTarget.getAttribute('aria-expanded')
                      e.currentTarget.setAttribute('aria-expanded', !n), t.setState({ servicesVisible: !y })
                    },
                    z = _e(Ge, {
                      config: s,
                      lang: u,
                      services: a,
                      toggle: function (e, t) {
                        e.map(function (e) {
                          e.required || p.updateConsent(e.name, t)
                        })
                      },
                      consents: d,
                      visible: y,
                      t: m,
                    }),
                    O = v || m(['!', 'purposes', l, 'description'])
                  return _e(
                    ke,
                    null,
                    _e('input', {
                      id: g,
                      className:
                        'cm-list-input' + (h ? ' required' : '') + (i ? '' : r ? ' only-required' : ' half-checked'),
                      'aria-labelledby': ''.concat(_),
                      'aria-describedby': ''.concat(g, '-description'),
                      disabled: h,
                      checked: i || (!o && !r),
                      type: 'checkbox',
                      onChange: function (e) {
                        c(e.target.checked)
                      },
                    }),
                    _e(
                      'label',
                      Ye({ htmlFor: g, className: 'cm-list-label' }, h ? { tabIndex: '0' } : {}),
                      _e(
                        'span',
                        { className: 'cm-list-title', id: ''.concat(_) },
                        f || m(['!', 'purposes', l, 'title?']) || Oe(l)
                      ),
                      w,
                      _e('span', { className: 'cm-switch' }, _e('div', { className: 'slider round active' }))
                    ),
                    _e(
                      'div',
                      { id: ''.concat(g, '-description') },
                      O && _e('p', { className: 'cm-list-description' }, _e(Ne, { config: s, text: O })),
                      e
                    ),
                    a.length > 0 &&
                      _e(
                        'div',
                        { className: 'cm-services' },
                        _e(
                          'div',
                          { className: 'cm-caret' },
                          _e(
                            'a',
                            {
                              href: '#',
                              'aria-haspopup': 'true',
                              'aria-expanded': 'false',
                              tabIndex: '0',
                              onClick: j,
                              onKeyDown: function (e) {
                                32 === e.keyCode && j(e)
                              },
                            },
                            (y && _e('span', null, '↑')) || _e('span', null, '↓'),
                            ' ',
                            a.length,
                            ' ',
                            m(['purposeItem', a.length > 1 ? 'services' : 'service'])
                          )
                        ),
                        _e('ul', { className: 'cm-content' + (y ? ' expanded' : '') }, z)
                      )
                  )
                },
              },
            ]),
            n && Xe(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function rt(e) {
          return (
            (rt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            rt(e)
          )
        }
        function ot(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return at(e, t)
                  var n = Object.prototype.toString.call(e).slice(8, -1)
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? at(e, t)
                      : void 0
                  )
                }
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var i = 0,
                r = function () {}
              return {
                s: r,
                n: function () {
                  return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                },
                e: function (e) {
                  throw e
                },
                f: r,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var o,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (o = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw o
              }
            },
          }
        }
        function at(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function st(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function ct(e, t) {
          return (
            (ct =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            ct(e, t)
          )
        }
        function lt(e, t) {
          if (t && ('object' === rt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return ut(e)
        }
        function ut(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function pt(e) {
          return (
            (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            pt(e)
          )
        }
        var dt = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && ct(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = pt(i)
                if (r) {
                  var n = pt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return lt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              (t = o.call(this, e)),
              e.manager.watch(ut(t)),
              (t.state = { consents: e.manager.consents }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.manager.unwatch(this)
                },
              },
              {
                key: 'update',
                value: function (e, t, n) {
                  e === this.props.manager && 'consents' === t && this.setState({ consents: n })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.config,
                    i = t.t,
                    r = t.manager,
                    o = t.lang,
                    a = this.state.consents,
                    s = n.services,
                    c = {},
                    l = ot(s)
                  try {
                    for (l.s(); !(e = l.n()).done; ) {
                      var u,
                        p = e.value,
                        d = ot(p.purposes)
                      try {
                        for (d.s(); !(u = d.n()).done; ) {
                          var f = u.value
                          void 0 === c[f] && (c[f] = []), c[f].push(p)
                        }
                      } catch (e) {
                        d.e(e)
                      } finally {
                        d.f()
                      }
                    }
                  } catch (e) {
                    l.e(e)
                  } finally {
                    l.f()
                  }
                  var v = function (e, t) {
                      e.map(function (e) {
                        var n,
                          i = ot(c[e])
                        try {
                          for (i.s(); !(n = i.n()).done; ) {
                            var o = n.value
                            o.required || r.updateConsent(o.name, t)
                          }
                        } catch (e) {
                          i.e(e)
                        } finally {
                          i.f()
                        }
                      })
                    },
                    m = function (e) {
                      var t,
                        n = { allEnabled: !0, onlyRequiredEnabled: !0, allDisabled: !0, allRequired: !0 },
                        i = ot(e)
                      try {
                        for (i.s(); !(t = i.n()).done; ) {
                          var r = t.value
                          r.required || (n.allRequired = !1),
                            a[r.name]
                              ? (r.required || (n.onlyRequiredEnabled = !1), (n.allDisabled = !1))
                              : r.required || (n.allEnabled = !1)
                        }
                      } catch (e) {
                        i.e(e)
                      } finally {
                        i.f()
                      }
                      return n.allDisabled && (n.onlyRequiredEnabled = !1), n
                    },
                    y = n.purposeOrder || [],
                    h = Object.keys(c)
                      .sort(function (e, t) {
                        return y.indexOf(e) - y.indexOf(t)
                      })
                      .map(function (e) {
                        var t = m(c[e])
                        return _e(
                          'li',
                          { key: e, className: 'cm-purpose' },
                          _e(it, {
                            allEnabled: t.allEnabled,
                            allDisabled: t.allDisabled,
                            onlyRequiredEnabled: t.onlyRequiredEnabled,
                            required: t.allRequired,
                            consents: a,
                            name: e,
                            config: n,
                            lang: o,
                            manager: r,
                            onToggle: function (t) {
                              v([e], t)
                            },
                            services: c[e],
                            t: i,
                          })
                        )
                      }),
                    b = Object.keys(c).filter(function (e) {
                      var t,
                        n = ot(c[e])
                      try {
                        for (n.s(); !(t = n.n()).done; ) if (!t.value.required) return !0
                      } catch (e) {
                        n.e(e)
                      } finally {
                        n.f()
                      }
                      return !1
                    }),
                    g = m(s)
                  return _e(
                    'ul',
                    { className: 'cm-purposes' },
                    h,
                    b.length > 1 &&
                      _e(
                        'li',
                        { className: 'cm-purpose cm-toggle-all' },
                        _e(it, {
                          name: 'disableAll',
                          title: i(['service', 'disableAll', 'title']),
                          description: i(['service', 'disableAll', 'description']),
                          allDisabled: g.allDisabled,
                          allEnabled: g.allEnabled,
                          onlyRequiredEnabled: g.onlyRequiredEnabled,
                          onToggle: function (e) {
                            v(Object.keys(c), e)
                          },
                          manager: r,
                          consents: a,
                          config: n,
                          lang: o,
                          services: [],
                          t: i,
                        })
                      )
                  )
                },
              },
            ]),
            n && st(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function ft(e) {
          return (
            (ft =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            ft(e)
          )
        }
        function vt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function mt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function yt(e, t) {
          return (
            (yt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            yt(e, t)
          )
        }
        function ht(e, t) {
          if (t && ('object' === ft(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function bt(e) {
          return (
            (bt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            bt(e)
          )
        }
        var gt = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && yt(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = bt(i)
                if (r) {
                  var n = bt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return ht(this, e)
              })
          function a() {
            return vt(this, a), o.apply(this, arguments)
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.consentModalRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    i = this,
                    r = this.props,
                    o = r.hide,
                    a = r.confirming,
                    s = r.saveAndHide,
                    c = r.acceptAndHide,
                    l = r.declineAndHide,
                    u = r.config,
                    p = r.manager,
                    d = r.lang,
                    f = r.t,
                    v = u.embedded,
                    m = void 0 === u.groupByPurpose || u.groupByPurpose
                  u.mustConsent ||
                    (e = _e(
                      'button',
                      {
                        title: f(['close']),
                        'aria-label': f(['close']),
                        className: 'hide',
                        type: 'button',
                        onClick: o,
                        tabIndex: '0',
                        ref: function (e) {
                          i.consentModalRef = e
                        },
                      },
                      _e(ze, { t: f })
                    )),
                    u.hideDeclineAll ||
                      p.confirmed ||
                      (t = _e(
                        'button',
                        {
                          disabled: a,
                          className: 'cm-btn cm-btn-decline cm-btn-danger cn-decline',
                          type: 'button',
                          onClick: l,
                        },
                        f(['decline'])
                      ))
                  var y,
                    h,
                    b,
                    g = _e(
                      'button',
                      {
                        disabled: a,
                        className: 'cm-btn cm-btn-success cm-btn-info cm-btn-accept',
                        type: 'button',
                        onClick: s,
                      },
                      f([p.confirmed ? 'save' : 'acceptSelected'])
                    )
                  u.acceptAll &&
                    !p.confirmed &&
                    (n = _e(
                      'button',
                      { disabled: a, className: 'cm-btn cm-btn-success cm-btn-accept-all', type: 'button', onClick: c },
                      f(['acceptAll'])
                    )),
                    void 0 !== u.privacyPolicy
                      ? 'string' == typeof u.privacyPolicy
                        ? (y = u.privacyPolicy)
                        : 'object' === ft(u.privacyPolicy) && (y = u.privacyPolicy[d] || u.privacyPolicy.default)
                      : void 0 !== (y = f(['!', 'privacyPolicyUrl'], { lang: d })) && (y = y.join('')),
                    void 0 !== y &&
                      (h = _e(
                        'a',
                        { key: 'ppLink', href: y, target: '_blank', rel: 'noopener' },
                        f(['privacyPolicy', 'name'])
                      )),
                    (b = _e(m ? dt : Qe, { t: f, config: u, manager: p, lang: d }))
                  var _ = _e(
                    'div',
                    { className: 'cm-modal cm-klaro' },
                    _e(
                      'div',
                      { className: 'cm-header' },
                      e,
                      _e('h1', { className: 'title' }, _e(Ne, { config: u, text: f(['consentModal', 'title']) })),
                      _e(
                        'p',
                        null,
                        _e(Ne, {
                          config: u,
                          text: [f(['consentModal', 'description'])].concat(
                            (h && [' '].concat(f(['privacyPolicy', 'text'], { privacyPolicy: h }))) || []
                          ),
                        })
                      )
                    ),
                    _e('div', { className: 'cm-body' }, b),
                    _e(
                      'div',
                      { className: 'cm-footer' },
                      _e('div', { className: 'cm-footer-buttons' }, t, g, n),
                      !u.disablePoweredBy &&
                        _e(
                          'p',
                          { className: 'cm-powered-by' },
                          _e(
                            'a',
                            { target: '_blank', href: u.poweredBy || 'https://kiprotect.com/klaro', rel: 'noopener' },
                            f(['poweredBy'])
                          )
                        )
                    )
                  )
                  return v
                    ? _e('div', { id: 'cookieScreen', className: 'cookie-modal cm-embedded' }, _)
                    : _e(
                        'div',
                        { id: 'cookieScreen', className: 'cookie-modal' },
                        _e('div', { className: 'cm-bg', onClick: o }),
                        _
                      )
                },
              },
            ]),
            n && mt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function _t(e) {
          return (
            (_t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            _t(e)
          )
        }
        function kt(e, t, n) {
          void 0 === n && (n = !0)
          for (var i = Object.keys(t), r = 0; r < i.length; r++) {
            var o = i[r],
              a = t[o],
              s = e[o]
            'string' == typeof a
              ? (n || void 0 === s) && (e[o] = a)
              : 'object' === _t(a) && ('object' === _t(s) ? kt(s, a, n) : (n || void 0 === s) && (e[o] = a))
          }
          return e
        }
        function wt(e) {
          return (
            (wt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            wt(e)
          )
        }
        function jt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function zt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function Ot(e, t) {
          return (
            (Ot =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Ot(e, t)
          )
        }
        function At(e, t) {
          if (t && ('object' === wt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Pt(e)
        }
        function Pt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function St(e) {
          return (
            (St = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            St(e)
          )
        }
        function xt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        var Ct = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Ot(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = St(i)
                if (r) {
                  var n = St(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return At(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              xt(Pt((t = o.call(this, e))), 'executeButtonClicked', function (e, n, i) {
                var r = t.state.modal,
                  o = 0
                e && (o = t.props.manager.changeAll(n))
                var a = t.props.manager.confirmed
                if ((t.props.manager.saveAndApplyConsents(i), e && !a && (r || t.props.config.mustConsent))) {
                  var s = function () {
                    t.setState({ confirming: !1 }), t.props.hide()
                  }
                  t.setState({ confirming: !0 }), 0 === o ? s() : setTimeout(s, 800)
                } else t.props.hide()
              }),
              xt(Pt(t), 'saveAndHide', function () {
                t.executeButtonClicked(!1, !1, 'save')
              }),
              xt(Pt(t), 'acceptAndHide', function () {
                t.executeButtonClicked(!0, !0, 'accept')
              }),
              xt(Pt(t), 'declineAndHide', function () {
                t.executeButtonClicked(!0, !1, 'decline')
              }),
              (t.state = { modal: e.modal, confirming: !1 }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.modal !== this.props.modal && this.setState({ modal: this.props.modal }),
                    this.noticeRef && this.noticeRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    i = this,
                    r = this.props,
                    o = r.lang,
                    a = r.config,
                    s = r.show,
                    c = r.manager,
                    l = r.testing,
                    u = r.t,
                    p = this.state,
                    d = p.confirming,
                    f = p.modal,
                    v = a.embedded,
                    m = a.noticeAsModal,
                    y = a.hideLearnMore,
                    h = a.purposeOrder || [],
                    b = (function (e) {
                      for (var t = new Set([]), n = 0; n < e.services.length; n++)
                        for (var i = e.services[n].purposes || [], r = 0; r < i.length; r++) t.add(i[r])
                      return Array.from(t)
                    })(a)
                      .filter(function (e) {
                        return 'functional' !== e
                      })
                      .sort(function (e, t) {
                        return h.indexOf(e) - h.indexOf(t)
                      }),
                    g = b.map(function (e) {
                      return u(['!', 'purposes', e, 'title?']) || Oe(e)
                    })
                  ;(t =
                    1 === g.length
                      ? g[0]
                      : []
                          .concat(
                            ((n = g.slice(0, -2)),
                            (function (e) {
                              if (Array.isArray(e)) return jt(e)
                            })(n) ||
                              (function (e) {
                                if (
                                  ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                                  null != e['@@iterator']
                                )
                                  return Array.from(e)
                              })(n) ||
                              (function (e, t) {
                                if (e) {
                                  if ('string' == typeof e) return jt(e, t)
                                  var n = Object.prototype.toString.call(e).slice(8, -1)
                                  return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                      ? Array.from(e)
                                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? jt(e, t)
                                      : void 0
                                  )
                                }
                              })(n) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                )
                              })()),
                            [g.slice(-2).join(' & ')]
                          )
                          .join(', ')),
                    void 0 !== a.privacyPolicy
                      ? 'string' == typeof a.privacyPolicy
                        ? (e = a.privacyPolicy)
                        : 'object' === wt(a.privacyPolicy) && (e = a.privacyPolicy[o] || a.privacyPolicy.default)
                      : void 0 !== (e = u(['!', 'privacyPolicyUrl'], { lang: o })) && (e = e.join(''))
                  var _,
                    k = function (e) {
                      e.preventDefault(), i.setState({ modal: !0 })
                    }
                  if (
                    (c.changed && (_ = _e('p', { className: 'cn-changes' }, u(['consentNotice', 'changeDescription']))),
                    !s && !l && !d)
                  )
                    return _e('div', null)
                  var w,
                    j = (!a.mustConsent || m) && !c.confirmed && !a.noNotice,
                    z = a.hideDeclineAll
                      ? ''
                      : _e(
                          'button',
                          {
                            className: 'cm-btn cm-btn-danger cn-decline',
                            type: 'button',
                            onClick: this.declineAndHide,
                          },
                          u(['decline'])
                        ),
                    O = a.acceptAll
                      ? _e(
                          'button',
                          { className: 'cm-btn cm-btn-success', type: 'button', onClick: this.acceptAndHide },
                          u(['ok'])
                        )
                      : _e(
                          'button',
                          { className: 'cm-btn cm-btn-success', type: 'button', onClick: this.saveAndHide },
                          u(['ok'])
                        ),
                    A = function () {
                      return m
                        ? _e(
                            'button',
                            {
                              key: 'learnMoreLink',
                              className: 'cm-btn cm-btn-lern-more cm-btn-info',
                              type: 'button',
                              onClick: k,
                            },
                            u(['consentNotice', 'learnMore'])
                          )
                        : _e(
                            'a',
                            { key: 'learnMoreLink', className: 'cm-link cn-learn-more', href: '#', onClick: k },
                            u(['consentNotice', 'learnMore'])
                          )
                    }
                  if (
                    (void 0 !== e && (w = _e('a', { key: 'ppLink', href: e }, u(['privacyPolicy', 'name']))),
                    f || (c.confirmed && !l) || (!c.confirmed && a.mustConsent))
                  )
                    return _e(gt, {
                      t: u,
                      lang: o,
                      config: a,
                      hide: function () {
                        ;(a.mustConsent && !a.acceptAll) ||
                          (c.confirmed && !l ? i.props.hide() : i.setState({ modal: !1 }),
                          setTimeout(function () {
                            i.noticeRef && i.noticeRef.focus()
                          }, 1))
                      },
                      confirming: d,
                      declineAndHide: this.declineAndHide,
                      saveAndHide: this.saveAndHide,
                      acceptAndHide: this.acceptAndHide,
                      manager: c,
                    })
                  var P = u(['!', 'consentNotice', 'title']),
                    S = _e(
                      'dialog',
                      {
                        'aria-describedby': 'id-cookie-notice',
                        'aria-labelledby': P ? 'id-cookie-title' : 'id-cookie-notice',
                        id: 'klaro-cookie-notice',
                        tabIndex: '0',
                        autoFocus: !0,
                        ref: function (e) {
                          i.noticeRef = e
                        },
                        className: 'cookie-notice '
                          .concat(j || l ? '' : 'cookie-notice-hidden', ' ')
                          .concat(m ? 'cookie-modal-notice' : '', ' ')
                          .concat(v ? 'cn-embedded' : ''),
                      },
                      _e(
                        'div',
                        { className: 'cn-body' },
                        P && _e('h2', { id: 'id-cookie-title' }, u(['consentNotice', 'title'])),
                        _e(
                          'p',
                          { id: 'id-cookie-notice' },
                          _e(Ne, {
                            config: a,
                            text: u(['consentNotice', 'description'], {
                              purposes: _e('strong', { key: 'strong' }, t),
                              privacyPolicy: w,
                              learnMoreLink: A(),
                            }),
                          })
                        ),
                        l && _e('p', null, u(['consentNotice', 'testing'])),
                        _,
                        _e('div', { className: 'cn-ok' }, !y && A(), _e('div', { className: 'cn-buttons' }, z, O))
                      )
                    )
                  return m
                    ? _e('div', { id: 'cookieScreen', className: 'cookie-modal' }, _e('div', { className: 'cm-bg' }), S)
                    : S
                },
              },
            ]),
            n && zt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function Et(e) {
          return (
            (Et =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Et(e)
          )
        }
        function Dt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function Nt(e, t) {
          return (
            (Nt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Nt(e, t)
          )
        }
        function qt(e, t) {
          if (t && ('object' === Et(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Mt(e)
        }
        function Mt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function Tt(e) {
          return (
            (Tt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Tt(e)
          )
        }
        var It = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Nt(e, t)
          })(a, e)
          var t,
            n,
            i,
            r,
            o =
              ((i = a),
              (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = Tt(i)
                if (r) {
                  var n = Tt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return qt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              (t = o.call(this, e)),
              e.manager.watch(Mt(t)),
              (t.state = { show: e.show > 0 || !e.manager.confirmed }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.manager.unwatch(this)
                },
              },
              {
                key: 'update',
                value: function (e, t) {
                  e === this.props.manager &&
                    'applyConsents' === t &&
                    (!this.props.config.embedded && this.props.manager.confirmed
                      ? this.setState({ show: !1 })
                      : this.forceUpdate())
                },
              },
              {
                key: 'notifyApi',
                value: function () {
                  var e = this.props,
                    t = e.api,
                    n = e.modal,
                    i = e.show,
                    r = e.config
                  if (void 0 !== t) {
                    if (n || i > 0) return
                    this.props.manager.confirmed ||
                      this.props.manager.auxiliaryStore.getWithKey('shown-before') ||
                      (t.update(this, 'showNotice', { config: r }),
                      this.props.manager.auxiliaryStore.setWithKey('shown-before', !0))
                  }
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.notifyApi()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  if (e.show !== this.props.show) {
                    this.notifyApi()
                    var t = this.props.show > 0 || !this.props.manager.confirmed
                    t !== this.state.show && this.setState({ show: t })
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.config,
                    i = t.t,
                    r = t.lang,
                    o = t.testing,
                    a = t.manager,
                    s = t.modal,
                    c = this.state.show,
                    l = n.additionalClass,
                    u = n.embedded,
                    p = n.stylePrefix
                  return _e(
                    'div',
                    { lang: r, className: (p || 'klaro') + (void 0 !== l ? ' ' + l : '') },
                    _e(Ct, {
                      key: 'app-' + this.props.show,
                      t: i,
                      testing: o,
                      show: c,
                      lang: r,
                      modal: s,
                      hide: function () {
                        u || e.setState({ show: !1 })
                      },
                      config: n,
                      manager: a,
                    })
                  )
                },
              },
            ]),
            n && Dt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function Rt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        const Bt = function (e) {
          var n,
            i,
            r = e.manager,
            o = e.style,
            a = e.config,
            s = e.t,
            c = e.lang,
            l = e.service,
            u =
              ((n = $(0)),
              (i = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(n) ||
                (function (e, t) {
                  var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                  if (null != n) {
                    var i,
                      r,
                      o = [],
                      a = !0,
                      s = !1
                    try {
                      for (
                        n = n.call(e);
                        !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t);
                        a = !0
                      );
                    } catch (e) {
                      ;(s = !0), (r = e)
                    } finally {
                      try {
                        a || null == n.return || n.return()
                      } finally {
                        if (s) throw r
                      }
                    }
                    return o
                  }
                })(n, i) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return Rt(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === n && e.constructor && (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? Rt(e, t)
                        : void 0
                    )
                  }
                })(n, i) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })()),
            p = u[0],
            d = u[1],
            f = a.additionalClass,
            v = (a.embedded, a.stylePrefix)
          !(function (e, n) {
            var i = F(T++, 3)
            !t.__s &&
              (function (e, t) {
                return (
                  !e ||
                  e.length !== t.length ||
                  t.some(function (t, n) {
                    return t !== e[n]
                  })
                )
              })(i.__H, n) &&
              ((i.__ = e), (i.__H = n), I.__H.__h.push(i))
          })(function () {
            var e = {
              update: function () {
                return d(p + 1)
              },
            }
            return (
              r.watch(e),
              function () {
                r.unwatch(e)
              }
            )
          })
          var m = De(l.translations || {}, c, 'zz', ['!', 'title']) || s(['!', l.name, 'title?']) || Oe(l.name)
          return _e(
            'div',
            { lang: c, className: (v || 'klaro') + (void 0 !== f ? ' ' + f : '') + ' cm-as-context-notice' },
            _e(
              'div',
              { className: 'context-notice' + (void 0 !== o ? ' cm-'.concat(o) : '') },
              _e('p', null, s(['contextualConsent', 'description'], { title: m })),
              _e(
                'p',
                { className: 'cm-buttons' },
                _e(
                  'button',
                  {
                    className: 'cm-btn cm-btn-success',
                    type: 'button',
                    onClick: function () {
                      r.updateConsent(l.name, !0), r.applyConsents(!1, !0, l.name), r.updateConsent(l.name, !1)
                    },
                  },
                  s(['contextualConsent', 'acceptOnce'])
                ),
                _e(
                  'button',
                  {
                    className: 'cm-btn cm-btn-success-var',
                    type: 'button',
                    onClick: function () {
                      r.updateConsent(l.name, !0),
                        r.confirmed
                          ? (r.saveConsents('contextual-accept'), r.applyConsents(!1, !0, l.name))
                          : r.applyConsents(!1, !0, l.name)
                    },
                  },
                  s(['contextualConsent', 'acceptAlways'])
                )
              )
            )
          )
        }
        function Ut() {
          for (
            var e = document.cookie.split(';'), t = [], n = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$'), i = 0;
            i < e.length;
            i++
          ) {
            var r = e[i],
              o = n.exec(r)
            null !== o && t.push({ name: o[1], value: o[2] })
          }
          return t
        }
        function Ht(e, t, n) {
          var i = e + '=; Max-Age=-99999999;'
          ;(document.cookie = i),
            (i += ' path=' + (t || '/') + ';'),
            (document.cookie = i),
            void 0 !== n && ((i += ' domain=' + n + ';'), (document.cookie = i))
        }
        function Lt(e, t) {
          if (e) {
            if ('string' == typeof e) return Kt(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Kt(e, t)
                : void 0
            )
          }
        }
        function Kt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function Vt(e) {
          for (var t = {}, n = 0; n < e.attributes.length; n++) {
            var i = e.attributes[n]
            i.name.startsWith('data-') && (t[i.name.slice(5)] = i.value)
          }
          return t
        }
        function Wt(e, t) {
          for (var n = Object.keys(e), i = 0; i < n.length; i++) {
            var r = n[i],
              o = e[r]
            t[r] !== o && t.setAttribute('data-' + r, o)
          }
        }
        function Ft(e) {
          return (
            (Ft =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Ft(e)
          )
        }
        function $t(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Zt(e, t)
        }
        function Zt(e, t) {
          return (
            (Zt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Zt(e, t)
          )
        }
        function Gt(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
              return !1
            }
          })()
          return function () {
            var n,
              i = Jt(e)
            if (t) {
              var r = Jt(this).constructor
              n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments)
            return Qt(this, n)
          }
        }
        function Qt(e, t) {
          if (t && ('object' === Ft(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Jt(e) {
          return (
            (Jt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Jt(e)
          )
        }
        function Yt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Xt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        function en(e, t, n) {
          return t && Xt(e.prototype, t), n && Xt(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
        }
        var tn = (function () {
            function e() {
              Yt(this, e), (this.value = null)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    return this.value
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    this.value = e
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    this.value = null
                  },
                },
              ]),
              e
            )
          })(),
          nn = (function () {
            function e(t) {
              Yt(this, e),
                (this.cookieName = t.storageName),
                (this.cookieDomain = t.cookieDomain),
                (this.cookiePath = t.cookiePath),
                (this.cookieExpiresAfterDays = t.cookieExpiresAfterDays)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    var e = (function (e) {
                      for (var t = Ut(), n = 0; n < t.length; n++) if (t[n].name === e) return t[n]
                      return null
                    })(this.cookieName)
                    return e ? e.value : null
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    return (function (e, t, n, i, r) {
                      var o = ''
                      if (n) {
                        var a = new Date()
                        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), (o = '; expires=' + a.toUTCString())
                      }
                      void 0 !== i && (o += '; domain=' + i),
                        (o += void 0 !== r ? '; path=' + r : '; path=/'),
                        (document.cookie = e + '=' + (t || '') + o + '; SameSite=Lax')
                    })(this.cookieName, e, this.cookieExpiresAfterDays, this.cookieDomain, this.cookiePath)
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    return Ht(this.cookieName)
                  },
                },
              ]),
              e
            )
          })(),
          rn = (function () {
            function e(t, n) {
              Yt(this, e), (this.key = t.storageName), (this.handle = n)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    return this.handle.getItem(this.key)
                  },
                },
                {
                  key: 'getWithKey',
                  value: function (e) {
                    return this.handle.getItem(e)
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    return this.handle.setItem(this.key, e)
                  },
                },
                {
                  key: 'setWithKey',
                  value: function (e, t) {
                    return this.handle.setItem(e, t)
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    return this.handle.removeItem(this.key)
                  },
                },
                {
                  key: 'deleteWithKey',
                  value: function (e) {
                    return this.handle.removeItem(e)
                  },
                },
              ]),
              e
            )
          })(),
          on = (function (e) {
            $t(n, e)
            var t = Gt(n)
            function n(e) {
              return Yt(this, n), t.call(this, e, localStorage)
            }
            return en(n)
          })(rn),
          an = (function (e) {
            $t(n, e)
            var t = Gt(n)
            function n(e) {
              return Yt(this, n), t.call(this, e, sessionStorage)
            }
            return en(n)
          })(rn)
        const sn = { cookie: nn, test: tn, localStorage: on, sessionStorage: an }
        function cn(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (Array.isArray(e) || (n = un(e)) || (t && e && 'number' == typeof e.length)) {
              n && (e = n)
              var i = 0,
                r = function () {}
              return {
                s: r,
                n: function () {
                  return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                },
                e: function (e) {
                  throw e
                },
                f: r,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var o,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (o = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw o
              }
            },
          }
        }
        function ln(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != n) {
                var i,
                  r,
                  o = [],
                  a = !0,
                  s = !1
                try {
                  for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
                } catch (e) {
                  ;(s = !0), (r = e)
                } finally {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw r
                  }
                }
                return o
              }
            })(e, t) ||
            un(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function un(e, t) {
          if (e) {
            if ('string' == typeof e) return pn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? pn(e, t)
                : void 0
            )
          }
        }
        function pn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function dn(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, i)
          }
          return n
        }
        function fn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? dn(Object(n), !0).forEach(function (t) {
                  vn(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dn(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function vn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function mn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        var yn = (function () {
          function e(t, n, i) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.config = t),
              (this.store = void 0 !== n ? n : new sn[this.storageMethod](this)),
              void 0 === this.store && (this.store = sn.cookie),
              (this.auxiliaryStore = void 0 !== i ? i : new an(this)),
              (this.consents = this.defaultConsents),
              (this.confirmed = !1),
              (this.changed = !1),
              (this.states = {}),
              (this.initialized = {}),
              (this.executedOnce = {}),
              (this.watchers = new Set([])),
              this.loadConsents(),
              this.applyConsents(),
              (this.savedConsents = fn({}, this.consents))
          }
          var t, n
          return (
            (t = e),
            (n = [
              {
                key: 'storageMethod',
                get: function () {
                  return this.config.storageMethod || 'cookie'
                },
              },
              {
                key: 'storageName',
                get: function () {
                  return this.config.storageName || this.config.cookieName || 'klaro'
                },
              },
              {
                key: 'cookieDomain',
                get: function () {
                  return this.config.cookieDomain || void 0
                },
              },
              {
                key: 'cookiePath',
                get: function () {
                  return this.config.cookiePath || void 0
                },
              },
              {
                key: 'cookieExpiresAfterDays',
                get: function () {
                  return this.config.cookieExpiresAfterDays || 120
                },
              },
              {
                key: 'defaultConsents',
                get: function () {
                  for (var e = {}, t = 0; t < this.config.services.length; t++) {
                    var n = this.config.services[t]
                    e[n.name] = this.getDefaultConsent(n)
                  }
                  return e
                },
              },
              {
                key: 'watch',
                value: function (e) {
                  this.watchers.has(e) || this.watchers.add(e)
                },
              },
              {
                key: 'unwatch',
                value: function (e) {
                  this.watchers.has(e) && this.watchers.delete(e)
                },
              },
              {
                key: 'notify',
                value: function (e, t) {
                  var n = this
                  this.watchers.forEach(function (i) {
                    i.update(n, e, t)
                  })
                },
              },
              {
                key: 'getService',
                value: function (e) {
                  var t = this.config.services.filter(function (t) {
                    return t.name === e
                  })
                  if (t.length > 0) return t[0]
                },
              },
              {
                key: 'getDefaultConsent',
                value: function (e) {
                  var t = e.default || e.required
                  return void 0 === t && (t = this.config.default), void 0 === t && (t = !1), t
                },
              },
              {
                key: 'changeAll',
                value: function (e) {
                  var t = this,
                    n = 0
                  return (
                    this.config.services
                      .filter(function (e) {
                        return !e.contextualConsentOnly
                      })
                      .map(function (i) {
                        i.required || t.config.required || e
                          ? t.updateConsent(i.name, !0) && n++
                          : t.updateConsent(i.name, !1) && n++
                      }),
                    n
                  )
                },
              },
              {
                key: 'updateConsent',
                value: function (e, t) {
                  var n = (this.consents[e] || !1) !== t
                  return (this.consents[e] = t), this.notify('consents', this.consents), n
                },
              },
              {
                key: 'resetConsents',
                value: function () {
                  ;(this.consents = this.defaultConsents),
                    (this.states = {}),
                    (this.confirmed = !1),
                    this.applyConsents(),
                    (this.savedConsents = fn({}, this.consents)),
                    this.store.delete(),
                    this.notify('consents', this.consents)
                },
              },
              {
                key: 'getConsent',
                value: function (e) {
                  return this.consents[e] || !1
                },
              },
              {
                key: 'loadConsents',
                value: function () {
                  var e = this.store.get()
                  return (
                    null !== e &&
                      ((this.consents = JSON.parse(decodeURIComponent(e))),
                      this._checkConsents(),
                      this.notify('consents', this.consents)),
                    this.consents
                  )
                },
              },
              {
                key: 'saveAndApplyConsents',
                value: function (e) {
                  this.saveConsents(e), this.applyConsents()
                },
              },
              {
                key: 'changedConsents',
                value: function () {
                  for (var e = {}, t = 0, n = Object.entries(this.consents); t < n.length; t++) {
                    var i = ln(n[t], 2),
                      r = i[0],
                      o = i[1]
                    this.savedConsents[r] !== o && (e[r] = o)
                  }
                  return e
                },
              },
              {
                key: 'saveConsents',
                value: function (e) {
                  var t = encodeURIComponent(JSON.stringify(this.consents))
                  this.store.set(t), (this.confirmed = !0), (this.changed = !1)
                  var n = this.changedConsents()
                  ;(this.savedConsents = fn({}, this.consents)),
                    this.notify('saveConsents', { changes: n, consents: this.consents, type: e || 'script' })
                },
              },
              {
                key: 'applyConsents',
                value: function (e, t, n) {
                  function i(e, t) {
                    if (void 0 !== e) return ('function' == typeof e ? e : new Function('opts', e))(t)
                  }
                  for (var r = 0, o = 0; o < this.config.services.length; o++) {
                    var a = this.config.services[o]
                    if (void 0 === n || n === a.name) {
                      var s = a.vars || {},
                        c = { service: a, config: this.config, vars: s }
                      this.initialized[a.name] || ((this.initialized[a.name] = !0), i(a.onInit, c))
                    }
                  }
                  for (var l = 0; l < this.config.services.length; l++) {
                    var u = this.config.services[l]
                    if (void 0 === n || n === u.name) {
                      var p = this.states[u.name],
                        d = u.vars || {},
                        f = void 0 !== u.optOut ? u.optOut : this.config.optOut || !1,
                        v = void 0 !== u.required ? u.required : this.config.required || !1,
                        m = this.confirmed || f || e || t,
                        y = (this.getConsent(u.name) && m) || v,
                        h = {
                          service: u,
                          config: this.config,
                          vars: d,
                          consents: this.consents,
                          confirmed: this.confirmed,
                        }
                      p !== y && r++,
                        e ||
                          (i(y ? u.onAccept : u.onDecline, h),
                          this.updateServiceElements(u, y),
                          this.updateServiceStorage(u, y),
                          void 0 !== u.callback && u.callback(y, u),
                          void 0 !== this.config.callback && this.config.callback(y, u),
                          (this.states[u.name] = y))
                    }
                  }
                  return this.notify('applyConsents', r, n), r
                },
              },
              {
                key: 'updateServiceElements',
                value: function (e, t) {
                  if (t) {
                    if (e.onlyOnce && this.executedOnce[e.name]) return
                    this.executedOnce[e.name] = !0
                  }
                  for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), i = 0; i < n.length; i++) {
                    var r = n[i],
                      o = r.parentElement,
                      a = Vt(r),
                      s = a.type,
                      c = a.src,
                      l = a.href,
                      u = ['href', 'src', 'type']
                    if ('placeholder' !== s)
                      if ('IFRAME' === r.tagName) {
                        if (t && r.src === c) {
                          console.debug(
                            'Skipping '
                              .concat(r.tagName, ' for service ')
                              .concat(e.name, ', as it already has the correct type...')
                          )
                          continue
                        }
                        var p,
                          d = document.createElement(r.tagName),
                          f = cn(r.attributes)
                        try {
                          for (f.s(); !(p = f.n()).done; ) {
                            var v = p.value
                            if ('style' === v.name) {
                              var m = ln(v.value.split(':'), 2),
                                y = m[0],
                                h = m[1]
                              d.style[y.trim()] = h.trim()
                            } else d.setAttribute(v.name, v.value)
                          }
                        } catch (e) {
                          f.e(e)
                        } finally {
                          f.f()
                        }
                        ;(d.innerText = r.innerText),
                          (d.text = r.text),
                          t
                            ? (void 0 !== a['original-display'] && (d.style.display = a['original-display']),
                              void 0 !== a.src && (d.src = a.src))
                            : ((d.src = ''),
                              void 0 !== a['modified-by-klaro'] && void 0 !== a['original-display']
                                ? d.setAttribute('data-original-display', a['original-display'])
                                : (void 0 !== r.style.display &&
                                    d.setAttribute('data-original-display', r.style.display),
                                  d.setAttribute('data-modified-by-klaro', 'yes')),
                              (d.style.display = 'none')),
                          o.insertBefore(d, r),
                          o.removeChild(r)
                      } else if ('SCRIPT' === r.tagName || 'LINK' === r.tagName) {
                        if (t && r.type === (s || '') && r.src === c) {
                          console.debug(
                            'Skipping '
                              .concat(r.tagName, ' for service ')
                              .concat(e.name, ', as it already has the correct type or src...')
                          )
                          continue
                        }
                        var b,
                          g = document.createElement(r.tagName),
                          _ = cn(r.attributes)
                        try {
                          for (_.s(); !(b = _.n()).done; ) {
                            var k = b.value
                            g.setAttribute(k.name, k.value)
                          }
                        } catch (e) {
                          _.e(e)
                        } finally {
                          _.f()
                        }
                        ;(g.innerText = r.innerText),
                          (g.text = r.text),
                          t
                            ? ((g.type = s || ''), void 0 !== c && (g.src = c), void 0 !== l && (g.href = l))
                            : (g.type = 'text/plain'),
                          o.insertBefore(g, r),
                          o.removeChild(r)
                      } else {
                        if (t) {
                          var w,
                            j = cn(u)
                          try {
                            for (j.s(); !(w = j.n()).done; ) {
                              var z = w.value,
                                O = a[z]
                              void 0 !== O && (void 0 === a['original-' + z] && (a['original-' + z] = r[z]), (r[z] = O))
                            }
                          } catch (e) {
                            j.e(e)
                          } finally {
                            j.f()
                          }
                          void 0 !== a.title && (r.title = a.title),
                            void 0 !== a['original-display']
                              ? (r.style.display = a['original-display'])
                              : r.style.removeProperty('display')
                        } else {
                          void 0 !== a.title && r.removeAttribute('title'),
                            void 0 === a['original-display'] &&
                              void 0 !== r.style.display &&
                              (a['original-display'] = r.style.display),
                            (r.style.display = 'none')
                          var A,
                            P = cn(u)
                          try {
                            for (P.s(); !(A = P.n()).done; ) {
                              var S = A.value
                              void 0 !== a[S] &&
                                (void 0 !== a['original-' + S] ? (r[S] = a['original-' + S]) : r.removeAttribute(S))
                            }
                          } catch (e) {
                            P.e(e)
                          } finally {
                            P.f()
                          }
                        }
                        Wt(a, r)
                      }
                    else
                      t
                        ? ((r.style.display = 'none'), (a['original-display'] = r.style.display))
                        : (r.style.display = a['original-display'] || 'block')
                  }
                },
              },
              {
                key: 'updateServiceStorage',
                value: function (e, t) {
                  if (!t && void 0 !== e.cookies && e.cookies.length > 0)
                    for (var n = Ut(), i = 0; i < e.cookies.length; i++) {
                      var r = e.cookies[i],
                        o = void 0,
                        a = void 0
                      if (r instanceof Array) {
                        var s = ln(r, 3)
                        ;(r = s[0]), (o = s[1]), (a = s[2])
                      } else if (r instanceof Object && !(r instanceof RegExp)) {
                        var c = r
                        ;(r = c.pattern), (o = c.path), (a = c.domain)
                      }
                      if (void 0 !== r) {
                        r instanceof RegExp ||
                          (r = r.startsWith('^')
                            ? new RegExp(r)
                            : new RegExp('^' + r.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') + '$'))
                        for (var l = 0; l < n.length; l++) {
                          var u = n[l]
                          null !== r.exec(u.name) &&
                            (console.debug('Deleting cookie:', u.name, 'Matched pattern:', r, 'Path:', o, 'Domain:', a),
                            Ht(u.name, o, a),
                            void 0 === a && Ht(u.name, o, '.' + window.location.hostname))
                        }
                      }
                    }
                },
              },
              {
                key: '_checkConsents',
                value: function () {
                  for (
                    var e = !0,
                      t = new Set(
                        this.config.services.map(function (e) {
                          return e.name
                        })
                      ),
                      n = new Set(Object.keys(this.consents)),
                      i = 0,
                      r = Object.keys(this.consents);
                    i < r.length;
                    i++
                  ) {
                    var o = r[i]
                    t.has(o) || delete this.consents[o]
                  }
                  var a,
                    s = cn(this.config.services)
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      var c = a.value
                      n.has(c.name) || ((this.consents[c.name] = this.getDefaultConsent(c)), (e = !1))
                    }
                  } catch (e) {
                    s.e(e)
                  } finally {
                    s.f()
                  }
                  ;(this.confirmed = e), e || (this.changed = !0)
                },
              },
            ]),
            n && mn(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        function hn(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, i)
          }
          return n
        }
        function bn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? hn(Object(n), !0).forEach(function (t) {
                  gn(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : hn(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function gn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function _n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i)
          }
        }
        var kn = (function () {
          function e(t, n, i) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.url = t),
              (this.id = n),
              (this.opts = Object.assign({}, i))
          }
          var t, n
          return (
            (t = e),
            (n = [
              {
                key: 'getLocationData',
                value: function (e) {
                  var t = e.records || {}
                  return {
                    pathname: void 0 === t.savePathname || t.savePathname ? location.pathname : void 0,
                    port: '' !== location.port ? parseInt(location.port) : 0,
                    hostname: location.hostname,
                    protocol: location.protocol.slice(0, location.protocol.length - 1),
                  }
                },
              },
              {
                key: 'getUserData',
                value: function () {
                  return { client_version: ti(), client_name: 'klaro:web' }
                },
              },
              {
                key: 'getBaseConsentData',
                value: function (e) {
                  return { location_data: this.getLocationData(e), user_data: this.getUserData(e) }
                },
              },
              {
                key: 'update',
                value: function (e, t, n) {
                  if ('saveConsents' === t) {
                    if ('save' === n.type && 0 === Object.keys(n.changes).length) return
                    var i = bn(
                      bn({}, this.getBaseConsentData(e.config)),
                      {},
                      {
                        consent_data: {
                          consents: n.consents,
                          changes: 'save' === n.type ? n.changes : void 0,
                          type: n.type,
                          config: e.config.id,
                        },
                      }
                    )
                    this.submitConsentData(i)
                  } else if ('showNotice' === t) {
                    var r = bn(
                      bn({}, this.getBaseConsentData(n.config)),
                      {},
                      { consent_data: { consents: {}, changes: {}, type: 'show', config: n.config.id } }
                    )
                    this.submitConsentData(r)
                  }
                },
              },
              {
                key: 'apiRequest',
                value: function (e, t, n, i) {
                  var r = this
                  return new Promise(function (o, a) {
                    var s,
                      c,
                      l = new XMLHttpRequest()
                    l.addEventListener('load', function () {
                      var e = JSON.parse(l.response)
                      l.status < 200 || l.status >= 300 ? ((e.status = l.status), a(e)) : o(e, l.status)
                    }),
                      l.addEventListener('error', function () {
                        a({ status: 0, xhr: l })
                      }),
                      void 0 !== n &&
                        ('GET' === e
                          ? (t +=
                              '?' +
                              ((c = n),
                              '?' +
                                Object.keys(c)
                                  .map(function (e) {
                                    return e + '=' + encodeURIComponent(c[e])
                                  })
                                  .join('&')))
                          : (s = JSON.stringify(n))),
                      l.open(e, r.url + t),
                      void 0 !== s && l.setRequestHeader('Content-Type', i || 'application/json;charset=UTF-8'),
                      l.send(s)
                  })
                },
              },
              {
                key: 'submitConsentData',
                value: function (e) {
                  return this.apiRequest(
                    'POST',
                    '/v1/privacy-managers/' + this.id + '/submit',
                    e,
                    'text/plain;charset=UTF-8'
                  )
                },
              },
              {
                key: 'loadConfig',
                value: function (e) {
                  return this.apiRequest(
                    'GET',
                    '/v1/privacy-managers/' +
                      this.id +
                      '/config.json?name=' +
                      e +
                      (this.opts.testing ? '&testing=true' : '')
                  )
                },
              },
              {
                key: 'loadConfigs',
                value: function () {
                  return this.apiRequest(
                    'GET',
                    '/v1/privacy-managers/' + this.id + '/configs.json' + (this.opts.testing ? '&testing=true' : '')
                  )
                },
              },
            ]) && _n(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        function wn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != n) {
                var i,
                  r,
                  o = [],
                  a = !0,
                  s = !1
                try {
                  for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
                } catch (e) {
                  ;(s = !0), (r = e)
                } finally {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw r
                  }
                }
                return o
              }
            })(e, t) ||
            jn(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function jn(e, t) {
          if (e) {
            if ('string' == typeof e) return zn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? zn(e, t)
                : void 0
            )
          }
        }
        function zn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function On(e, t, n) {
          if (void 0 !== e.styling) {
            var i = Object.assign({}, e.styling)
            if (void 0 !== i.theme) {
              var r = i.theme
              r instanceof Array || (r = [r]), (i = {})
              var o,
                a = (function (e, t) {
                  var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                  if (!n) {
                    if (Array.isArray(e) || (n = jn(e))) {
                      n && (e = n)
                      var i = 0,
                        r = function () {}
                      return {
                        s: r,
                        n: function () {
                          return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                        },
                        e: function (e) {
                          throw e
                        },
                        f: r,
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    )
                  }
                  var o,
                    a = !0,
                    s = !1
                  return {
                    s: function () {
                      n = n.call(e)
                    },
                    n: function () {
                      var e = n.next()
                      return (a = e.done), e
                    },
                    e: function (e) {
                      ;(s = !0), (o = e)
                    },
                    f: function () {
                      try {
                        a || null == n.return || n.return()
                      } finally {
                        if (s) throw o
                      }
                    },
                  }
                })(r)
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var s = t[o.value]
                  if (void 0 !== s)
                    for (var c = 0, l = Object.entries(s); c < l.length; c++) {
                      var u = wn(l[c], 2),
                        p = u[0],
                        d = u[1]
                      p.startsWith('_') || (i[p] = d)
                    }
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              for (var f = 0, v = Object.entries(e.styling); f < v.length; f++) {
                var m = wn(v[f], 2),
                  y = m[0],
                  h = m[1]
                'theme' !== y && (i[y] = h)
              }
            }
            void 0 === n && (n = document.documentElement)
            for (var b = 0, g = Object.entries(i); b < g.length; b++) {
              var _ = wn(g[b], 2),
                k = _[0],
                w = _[1]
              n.style.setProperty('--' + k, w)
            }
            window.document.documentMode &&
              n === document.documentElement &&
              (function (e) {
                var t,
                  n = (function (e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                    if (!n) {
                      if (Array.isArray(e) || (n = Lt(e))) {
                        n && (e = n)
                        var i = 0,
                          r = function () {}
                        return {
                          s: r,
                          n: function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                          },
                          e: function (e) {
                            throw e
                          },
                          f: r,
                        }
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    }
                    var o,
                      a = !0,
                      s = !1
                    return {
                      s: function () {
                        n = n.call(e)
                      },
                      n: function () {
                        var e = n.next()
                        return (a = e.done), e
                      },
                      e: function (e) {
                        ;(s = !0), (o = e)
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return()
                        } finally {
                          if (s) throw o
                        }
                      },
                    }
                  })(document.querySelectorAll('style[data-context=klaro-styles]'))
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var i = t.value,
                      r = i.innerText
                    void 0 !== i.styleSheet && (r = i.styleSheet.cssText)
                    for (
                      var o = function () {
                          var e,
                            t,
                            n =
                              ((t = 2),
                              (function (e) {
                                if (Array.isArray(e)) return e
                              })((e = s[a])) ||
                                (function (e, t) {
                                  var n =
                                    null == e
                                      ? null
                                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                                  if (null != n) {
                                    var i,
                                      r,
                                      o = [],
                                      a = !0,
                                      s = !1
                                    try {
                                      for (
                                        n = n.call(e);
                                        !(a = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t);
                                        a = !0
                                      );
                                    } catch (e) {
                                      ;(s = !0), (r = e)
                                    } finally {
                                      try {
                                        a || null == n.return || n.return()
                                      } finally {
                                        if (s) throw r
                                      }
                                    }
                                    return o
                                  }
                                })(e, t) ||
                                Lt(e, t) ||
                                (function () {
                                  throw new TypeError(
                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                  )
                                })()),
                            i = n[0],
                            o = n[1],
                            c = new RegExp('([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--' + i + ',\\s*[^\\)]+\\)', 'g')
                          r = r.replace(c, function (e, t) {
                            return ''
                              .concat(t, ': ')
                              .concat(o, '; ')
                              .concat(t, ': var(--')
                              .concat(i, ', ')
                              .concat(o, ')')
                          })
                        },
                        a = 0,
                        s = Object.entries(e);
                      a < s.length;
                      a++
                    )
                      o()
                    var c = document.createElement('style')
                    c.setAttribute('type', 'text/css'),
                      c.setAttribute('data-context', 'klaro-styles'),
                      void 0 !== c.styleSheet ? (c.styleSheet.cssText = r) : (c.innerText = r),
                      i.parentElement.appendChild(c),
                      i.parentElement.removeChild(i)
                  }
                } catch (e) {
                  n.e(e)
                } finally {
                  n.f()
                }
              })(i)
          }
        }
        function An(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        function Pn(e) {
          for (var t = new Map([]), n = 0, i = Object.keys(e); n < i.length; n++) {
            var r = i[n],
              o = e[r]
            'string' == typeof r && ('string' == typeof o || null === o ? t.set(r, o) : t.set(r, Pn(o)))
          }
          return t
        }
        function Sn(e, t, n, i) {
          var r = function (e, t, n) {
            if (n instanceof Map) {
              var i = new Map([])
              Sn(i, n, !0, !1), e.set(t, i)
            } else e.set(t, n)
          }
          if (!(t instanceof Map && e instanceof Map)) throw new Error('Parameters are not maps!')
          void 0 === n && (n = !0), void 0 === i && (i = !1), i && (e = new e.constructor(e))
          var o,
            a = (function (e, t) {
              var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return An(e, t)
                      var n = Object.prototype.toString.call(e).slice(8, -1)
                      return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? An(e, t)
                          : void 0
                      )
                    }
                  })(e)) ||
                  (t && e && 'number' == typeof e.length)
                ) {
                  n && (e = n)
                  var i = 0,
                    r = function () {}
                  return {
                    s: r,
                    n: function () {
                      return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: r,
                  }
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              }
              var o,
                a = !0,
                s = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (a = e.done), e
                },
                e: function (e) {
                  ;(s = !0), (o = e)
                },
                f: function () {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw o
                  }
                },
              }
            })(t.keys())
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var s = o.value,
                c = t.get(s),
                l = e.get(s)
              if (e.has(s))
                if (c instanceof Map && l instanceof Map) e.set(s, Sn(l, c, n, i))
                else {
                  if (!n) continue
                  r(e, s, c)
                }
              else r(e, s, c)
            }
          } catch (e) {
            a.e(e)
          } finally {
            a.f()
          }
          return e
        }
        var xn,
          Cn = {
            top: { _meta: { incompatibleWith: ['bottom'] }, 'notice-top': '20px', 'notice-bottom': 'auto' },
            bottom: { _meta: { incompatibleWith: ['top'] }, 'notice-bottom': '20px', 'notice-top': 'auto' },
            left: { _meta: { incompatibleWith: ['wide'] }, 'notice-left': '20px', 'notice-right': 'auto' },
            right: { _meta: { incompatibleWith: ['wide'] }, 'notice-right': '20px', 'notice-left': 'auto' },
            wide: {
              'notice-left': '20px',
              'notice-right': 'auto',
              'notice-max-width': 'calc(100vw - 60px)',
              'notice-position': 'fixed',
            },
            light: {
              'button-text-color': '#fff',
              dark1: '#fafafa',
              dark2: '#777',
              dark3: '#555',
              light1: '#444',
              light2: '#666',
              light3: '#111',
              green3: '#f00',
            },
          }
        function En(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, i)
          }
          return n
        }
        function Dn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? En(Object(n), !0).forEach(function (t) {
                  Nn(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : En(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function Nn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function qn(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (Array.isArray(e) || (n = Mn(e)) || (t && e && 'number' == typeof e.length)) {
              n && (e = n)
              var i = 0,
                r = function () {}
              return {
                s: r,
                n: function () {
                  return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
                },
                e: function (e) {
                  throw e
                },
                f: r,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var o,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (o = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw o
              }
            },
          }
        }
        function Mn(e, t) {
          if (e) {
            if ('string' == typeof e) return Tn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Tn(e, t)
                : void 0
            )
          }
        }
        function Tn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
          return i
        }
        var In = new Map([]),
          Rn = {},
          Bn = {}
        function Un(e, t) {
          return (e.elementID || 'klaro') + (t ? '-ide' : '')
        }
        function Hn(e, t) {
          var n = Un(e, t),
            i = document.getElementById(n)
          return null === i && (((i = document.createElement('div')).id = n), document.body.appendChild(i)), i
        }
        function Ln(e, t) {
          if ((void 0 === Rn[e] ? (Rn[e] = [t]) : Rn[e].push(t), void 0 !== Bn[e])) {
            var n,
              i = qn(Bn[e])
            try {
              for (i.s(); !(n = i.n()).done; ) {
                var r = n.value
                if (
                  !1 ===
                  t.apply(
                    void 0,
                    (function (e) {
                      if (Array.isArray(e)) return Tn(e)
                    })((o = r)) ||
                      (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                          return Array.from(e)
                      })(o) ||
                      Mn(o) ||
                      (function () {
                        throw new TypeError(
                          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                      })()
                  )
                )
                  break
              }
            } catch (e) {
              i.e(e)
            } finally {
              i.f()
            }
          }
          var o
        }
        function Kn(e) {
          for (var t = Rn[e], n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
            i[r - 1] = arguments[r]
          if ((void 0 === Bn[e] ? (Bn[e] = [i]) : Bn[e].push(i), void 0 !== t)) {
            var o,
              a = qn(t)
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var s = o.value
                if (!0 === s.apply(void 0, i)) return !0
              }
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
          }
        }
        function Vn(e) {
          var t = new Map([])
          return Sn(t, In), Sn(t, Pn(e.translations || {})), t
        }
        var Wn = 1
        function Fn(e, t) {
          if (void 0 !== e) {
            ;(t = t || {}), Kn('render', (e = Gn(e)), t)
            var n = 0
            t.show && (n = Wn++)
            var i = Hn(e),
              r = ei(e)
            void 0 !== t.api && r.watch(t.api), On(e, Cn, i)
            var o = Ce(e),
              a = Vn(e),
              s = function () {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
                return De.apply(void 0, [a, o, e.fallbackLang || 'zz'].concat(n))
              },
              c = de(
                _e(It, {
                  t: s,
                  lang: o,
                  manager: r,
                  config: e,
                  testing: t.testing,
                  modal: t.modal,
                  api: t.api,
                  show: n,
                }),
                i
              )
            return $n(r, s, o, e, t), c
          }
        }
        function $n(e, t, n, i, r) {
          var o,
            a = [],
            s = qn(i.services)
          try {
            for (s.s(); !(o = s.n()).done; ) {
              var c,
                l = o.value,
                u = e.getConsent(l.name) && e.confirmed,
                p = qn(document.querySelectorAll("[data-name='" + l.name + "']"))
              try {
                for (p.s(); !(c = p.n()).done; ) {
                  var d = c.value,
                    f = Vt(d)
                  if ('placeholder' !== f.type && ('IFRAME' === d.tagName || 'DIV' === d.tagName)) {
                    var v = d.previousElementSibling
                    if (null !== v) {
                      var m = Vt(v)
                      ;('placeholder' === m.type && m.name === l.name) || (v = null)
                    }
                    if (null === v) {
                      ;((v = document.createElement('DIV')).style.maxWidth = d.width + 'px'),
                        (v.style.height = d.height + 'px'),
                        Wt({ type: 'placeholder', name: l.name }, v),
                        u && (v.style.display = 'none'),
                        d.parentElement.insertBefore(v, d)
                      var y = de(
                        _e(Bt, {
                          t,
                          lang: n,
                          manager: e,
                          config: i,
                          service: l,
                          style: f.style,
                          testing: r.testing,
                          api: r.api,
                        }),
                        v
                      )
                      a.push(y)
                    }
                    'IFRAME' === d.tagName && (f.src = d.src),
                      void 0 === f['modified-by-klaro'] &&
                        void 0 === d.style.display &&
                        (f['original-display'] = d.style.display),
                      (f['modified-by-klaro'] = 'yes'),
                      Wt(f, d),
                      u || ((d.src = ''), (d.style.display = 'none'))
                  }
                }
              } catch (e) {
                p.e(e)
              } finally {
                p.f()
              }
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
          return a
        }
        function Zn(e) {
          ;/complete|interactive|loaded/.test(document.readyState)
            ? e()
            : window.addEventListener('DOMContentLoaded', e)
        }
        function Gn(e) {
          var t = Dn({}, e)
          return (
            2 === t.version ||
              (void 0 !== t.apps &&
                void 0 === t.services &&
                ((t.services = t.apps),
                console.warn('Warning, your configuration file is outdated. Please change `apps` to `services`'),
                delete t.apps),
              void 0 !== t.translations &&
                void 0 !== t.translations.apps &&
                void 0 === t.services &&
                ((t.translations.services = t.translations.apps),
                console.warn(
                  'Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key'
                ),
                delete t.translations.apps)),
            t
          )
        }
        function Qn(e) {
          if (void 0 !== window) {
            var t = (function (e) {
                if (null !== document.currentScript && void 0 !== document.currentScript) return document.currentScript
                for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n++) {
                  var i = t[n]
                  if (i.src.includes('klaro')) return i
                }
                return null
              })(),
              n = new Map(
                decodeURI(location.hash.slice(1))
                  .split('&')
                  .map(function (e) {
                    return e.split('=')
                  })
                  .map(function (e) {
                    return 1 === e.length ? [e[0], !0] : e
                  })
              ),
              i = n.get('klaro-testing'),
              r = function (e) {
                var t = Dn(Dn({}, e), {}, { testing: i })
                xn.noAutoLoad || (xn.testing && !t.testing) || Fn(xn, t)
              }
            if (void 0 !== e)
              (xn = e),
                Zn(function () {
                  return r({})
                })
            else if (null !== t) {
              var o = (function (e) {
                  var t = e.getAttribute('data-klaro-id')
                  if (null !== t) return t
                  var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src)
                  return null !== n ? n[1] : null
                })(t),
                a = (function (e) {
                  var t = e.getAttribute('data-klaro-api-url')
                  if (null !== t) return t
                  var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src)
                  return null !== n ? n[1] : null
                })(t),
                s = (function (e, t) {
                  if (e.has('klaro-config')) return e.get('klaro-config')
                  var n = t.getAttribute('data-klaro-config')
                  return null !== n ? n : 'default'
                })(n, t)
              if (null !== o) {
                var c = new kn(a, o, { testing: i })
                if (void 0 !== window.klaroApiConfigs) {
                  if (!0 === Kn('apiConfigsLoaded', window.klaroApiConfigs, c)) return
                  var l = window.klaroApiConfigs.find(function (e) {
                    return e.name === s && ('active' === e.status || i)
                  })
                  void 0 !== l
                    ? ((xn = l),
                      Zn(function () {
                        return r({ api: c })
                      }))
                    : Kn('apiConfigsFailed', {})
                } else
                  c.loadConfig(s)
                    .then(function (e) {
                      !0 !== Kn('apiConfigsLoaded', [e], c) &&
                        ((xn = e),
                        Zn(function () {
                          return r({ api: c })
                        }))
                    })
                    .catch(function (e) {
                      console.error(e, 'cannot load Klaro configs'), Kn('apiConfigsFailed', e)
                    })
              } else {
                var u = t.getAttribute('data-klaro-config') || 'klaroConfig'
                void 0 !== (xn = window[u]) &&
                  Zn(function () {
                    return r({})
                  })
              }
            }
            n.has('klaro-ide') &&
              (function (e) {
                var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || '',
                  n = document.createElement('script')
                ;(n.src = '' !== t ? t + '/ide.js' : 'ide.js'), (n.type = 'application/javascript')
                var i,
                  r = qn(n.attributes)
                try {
                  for (r.s(); !(i = r.n()).done; ) {
                    var o = i.value
                    n.setAttribute(o.name, o.value)
                  }
                } catch (e) {
                  r.e(e)
                } finally {
                  r.f()
                }
                document.head.appendChild(n)
              })(t)
          }
        }
        function Jn(e, t, n) {
          return Fn((e = e || xn), { show: !0, modal: t, api: n }), !1
        }
        var Yn = {}
        function Xn() {
          for (var e in Object.keys(Yn)) delete Yn[e]
        }
        function ei(e) {
          var t = (e = e || xn).storageName || e.cookieName || 'default'
          return void 0 === Yn[t] && (Yn[t] = new yn(Gn(e))), Yn[t]
        }
        function ti() {
          return 'v' === 'unknown'[0] ? 'unknown'.slice(1) : 'unknown'
        }
        var ni = n(898),
          ii = n.n(ni),
          ri = n(509),
          oi = n.n(ri),
          ai = n(702),
          si = n.n(ai),
          ci = n(584),
          li = n.n(ci),
          ui = n(163),
          pi = n.n(ui),
          di = n(555),
          fi = n.n(di),
          vi = n(40),
          mi = n.n(vi),
          yi = n(210),
          hi = n.n(yi),
          bi = n(833),
          gi = n.n(bi),
          _i = n(646),
          ki = n.n(_i),
          wi = n(483),
          ji = n.n(wi),
          zi = n(986),
          Oi = n.n(zi),
          Ai = n(250),
          Pi = n.n(Ai),
          Si = n(439),
          xi = n.n(Si),
          Ci = n(376),
          Ei = n.n(Ci),
          Di = n(619),
          Ni = n.n(Di),
          qi = n(501),
          Mi = n.n(qi),
          Ti = n(375),
          Ii = n.n(Ti),
          Ri = n(137),
          Bi = n.n(Ri),
          Ui = n(812),
          Hi = n.n(Ui),
          Li = n(220),
          Ki = n.n(Li),
          Vi = n(538),
          Wi = n.n(Vi),
          Fi = n(785),
          $i = n.n(Fi),
          Zi = n(758),
          Gi = n.n(Zi),
          Qi = n(227),
          Ji = n.n(Qi),
          Yi = Pn({
            ca: si(),
            cs: li(),
            da: pi(),
            de: fi(),
            el: mi(),
            en: hi(),
            zh: ii(),
            pt: oi(),
            es: gi(),
            fi: ki(),
            fr: ji(),
            gl: Oi(),
            hu: Pi(),
            hr: xi(),
            it: Ei(),
            nl: Ni(),
            no: Mi(),
            oc: Ii(),
            ro: Bi(),
            sr: Hi(),
            sr_cyrl: Ki(),
            sv: Wi(),
            tr: $i(),
            pl: Gi(),
            ru: Ji(),
          })
        Sn(In, Yi), Qn()
      })(),
      i
    )
  })()
})
