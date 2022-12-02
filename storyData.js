const storyData = {
	Chapitre1 : {
		getText() {
			return "Tu es un jeune adulte vivant ta belle vie d&#39;étudiant et ce soir c&#39;est le grand soir. Ton ami Billy t&#39;as invité à sa soirée et une personne qui te plait bien sera présente. Tu te prépares tranquillement, te fais à manger et te prépares à partir. Avant de passer le pas de la porte, ton téléphone sonne : ta mère t&#39;appelle, encore ! Tu es relativement pressé mais cela reste ta maman... <br><br>Que fais-tu ?";
		},
		getOptions() {
			return [
				{
					name: "Tu lui réponds. ",
					redirect: "telephone",
				},
				{
					name: "Tu ne réponds pas ",
					redirect: "depart",
				},
			]
		},
    },
	telephone : {
		getText() {
			return "-Allo ?<br>-Salut mon chéri, tu as passé une bonne journée ?<br>-Oui maman.<br>-Je sais que tu as une soirée avec tes amis ce soir et je voulais te rapeller quelques points important...<br>-Je sais déjà tout ça maman et puis je suis préssé là.<br>-Oui oui mais fais attention si tu bois trop il vaut mieux que tu restes dormir sur place et pense à te protéger !<br><br>Que lui répond-tu ?";
		},
		getOptions() {
			return [
				{
					name: "- C&#39;est bon maman je sais !",
					redirect: "ok",
				},
				{
					name: "- T&#39;inquiète je gère ! ",
					redirect: "bof",
				},
				{
					name: "- Oui oui... Je te laisse je suis attendu.",
					redirect: "rien",
				},
			]
		},
    },
	depart : {
		getText() {
			return "Tu arrives à la soirée chez Billy, tu salues les invités et entames des discussions avec tes amis. Tu aperçois soudain la personne qui attire ton regard depuis plusieurs jours. @globulus@";
		},
		getOptions() {
			return [
				{
					name: "C&#39;est une femme.",
					redirect: "action",
				},
				{
					name: "C&#39;est un homme.",
					redirect: "action",
				},
				{
					name: "C&#39;est une personne non binaire.",
					redirect: "action",
				},
			]
		},
    },
	bof : {
		getText() {
			return "Tu attrapes un ou deux préservatifs au fond de ton tiroir avant de partir.";
		},
		getOptions() {
			return [
				{
					name: "Tu pars en direction de la soirée.",
					redirect: "depart",
				},
			]
		},
    },
	ok : {
		getText() {
			return "Tu attrapes des préservatifs dans ton tiroir. Tu constates que leur date de préemption est dépassée.";
		},
		getOptions() {
			return [
				{
					name: "Tu les prends quand même, la date c&#39;est pas important.",
					redirect: "depart",
				},
				{
					name: "Tu pars en acheter dans le distributeur de la pharmacie d&#39;à côté.",
					redirect: "depart",
				},
				{
					name: "Tu passeras au supermarché sur le chemin pour acheter une boîte de préservatif.",
					redirect: "depart",
				},
			]
		},
    },
	rien : {
		getText() {
			return "Tu pars aussitôt en direction de la soirée.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "depart",
				},
			]
		},
    },
	action : {
		getText() {
			return "Tu observes les gens autour de toi, il y a les fumeurs qui discutent dehors, des amis sont proches du bar à se servir des verres et d&#39;autres dansent au rythme de la musique sur la piste dont cette personne.";
		},
		getOptions() {
			return [
				{
					name: "Tu rejoins des amis.",
					redirect: "discussion",
				},
				{
					name: "Tu vas danser afin de te raprocher d&#39;elle.",
					redirect: "danse",
				},
				{
					name: "Tu vas boire un verre.",
					redirect: "verre1",
				},
			]
		},
    },
	discussion : {
		getText() {
			return "Tu décides de parler à...";
		},
		getOptions() {
			return [
				{
					name: "Manuel qui est habitué des coups d&#39;un soir et qui parle facilement de sexe",
					redirect: "Manuel",
				},
				{
					name: "Liza qui a déjà eu plusieurs aventures et qui est prévoyante",
					redirect: "Liza",
				},
				{
					name: "Freddy qui est séropositif",
					redirect: "Freddy",
				},
			]
		},
    },
	danse : {
		getText() {
			return "Après avoir danser un moment avec elle,@globulus@ vous discutez pendant un long moment et le courant passe bien. Vous montez à l&#39;étage pour être au calme dans une chambre.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "Chambre",
				},
			]
		},
    },
	verre1 : {
		getText() {
			return "Tu bois un verre d&#39;alcool.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	Liza : {
		getText() {
			return "- Salut Liza, j&#39;ai un.e mec.meuf à la soirée qui m&#39;intéresse bien mais je suis pas sûr de ma sécurité si on passe à l&#39;acte ce soir.<br>- Des fois le préservatif crack, ça peut être grave mais y&#39;a des solutions commes le TPE, un traitement d&#39;urgence, si tu le prends assez tôt genre sous 48h ou même des traitements préventifs à prendre en amont si tu sais que tu vas avoir un partenaire ayant potentiellement le VIH. Tu ce qu&#39;il te faut pour te protéger ?<br>- Oui j&#39;ai un préservatif/Non j&#39;ai oublié@globulus@<br>- Je sais pas si tu sais mais si tu veux en avoir sans jugement, y&#39;en a en libre accès au planning familial. Et puis dans tous les cas c&#39;est important de se tester régulièrement genre tous les 3 à 6 mois si tu n&#39;as pas de partenaire régulier.<br>- Merci pour tes renseignements.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	Freddy : {
		getText() {
			return "- Salut Freddy, je suis intéressé par un.e mec.meuf de la soirée mais je suis pas sûr de ma sécurité si on passe à l&#39;acte ce soir.<br>- Si je peux te donner un seul conseil c&#39;est ne fait pas comme moi, pense à te protéger dès le moindre doute.<br>- C&#39;est vrai ça, comment tu as su que tu est séropositif ?<br>- J&#39;ai fais la gaffe une fois de vouloir profiter sans me prendre la tête et puis je suis pas aller faire les tests au bon moment par peur d&#39;être jugé.<br>- Et tu fais comment pour vivre en étant séropositif ?<br>- Bah je prend un traitement pour protéger mes partenaires et avoir une charge virale nulle. Tu savais qu&#39;on peux vivre avec le VIH sans le refiler aux autres ?";
		},
		getOptions() {
			return [
				{
					name: "Oui",
					redirect: "fredsuite",
				},
				{
					name: "Non",
					redirect: "fredsuite",
				},
			]
		},
    },
	Manuel : {
		getText() {
			return "- Salut Manu, t&#39;as vu le.a mec.meuf là-bas iel me plaît bien.<br>- T&#39;as une capote au cas où ?<br> @globulus@<br> ";
		},
		getOptions() {
			return [
				{
					name: "- Oui t&#39;inquiète",
					redirect: "capote",
				},
				{
					name: "- Non, t&#39;en as pas une s&#39;il te plaît ?",
					redirect: "pascapoteManu",
				},
				{
					name: "- Je ferai sans",
					redirect: "sanscapote",
				},
				{
					name: "- Au pire on fera que des prélis",
					redirect: "quepreli",
				},
			]
		},
    },
	capote : {
		getText() {
			return " - Elle est pas périmée, tu sais que ça peut représenter un risque  ?";
		},
		getOptions() {
			return [
				{
					name: "- Non, t&#39;inquiète",
					redirect: "pasperime",
				},
				{
					name: "- Je sais pas",
					redirect: "perime",
				},
			]
		},
    },
	pascapoteManu : {
		getText() {
			return "- Si tiens !@globulus@";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	sanscapote : {
		getText() {
			return "- Ok tant que t&#39;es au courant des risques que tu prends.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	quepreli : {
		getText() {
			return "- Fais gaffe, les préliminaires non protégés représentent le même risque de transmission qu&#39;une pénétration non protégé.";
		},
		getOptions() {
			return [
				{
					name: "- T&#39;inquiètes j&#39;ai pas de maladie",
					redirect: "protection",
				},
				{
					name: "- Comment se protéger ?",
					redirect: "protection",
				},
			]
		},
    },
	pasperime : {
		getText() {
			return "- Ok, tu gères !";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	perime : {
		getText() {
			return "- T&#39;en veux une au cas où ?@globulus@";
		},
		getOptions() {
			return [
				{
					name: "- Oui s&#39;il te plaît",
					redirect: "actionbis",
				},
				{
					name: "- Pas besoin",
					redirect: "péventif",
				},
			]
		},
    },
	actionbis : {
		getText() {
			return "";
		},
		getOptions() {
			return [
				{
					name: "Tu va parler à des amis.",
					redirect: "discussion",
				},
				{
					name: "Tu vas danser afin de te raprocher d&#39;elle.",
					redirect: "danse",
				},
				{
					name: "Tu vas boire un autre verre.",
					redirect: "verre1",
				},
			]
		},
    },
	péventif : {
		getText() {
			return "- Fais gaffe aux risques de transmission d&#39;IST en cas de rapport non protégé.";
		},
		getOptions() {
			return [
				{
					name: "- Ouai mais ça ira pour cette fois",
					redirect: "sanscapote",
				},
				{
					name: "- C&#39;est vrai, je la veux bien du coup",
					redirect: "pascapoteManu",
				},
			]
		},
    },
	protection : {
		getText() {
			return "- Lors de tout rapport sexuel avec une personne dont on ne connaît pas le passé sexuel, tout mélange de fluides corporels peut représenter un risque même les rapports bucco-génitaux. Tu peux utiliser un préservatif, une digue dentaire ou même une culotte antiIST.";
		},
		getOptions() {
			return [
				{
					name: "-Ok merci.",
					redirect: "actionbis",
				},
			]
		},
    },
	Chambre : {
		getText() {
			return "Une fois dans la chambre, tu es face à elle.";
		},
		getOptions() {
			return [
				{
					name: "- Ingrid, est-ce que tu baises",
					redirect: "lesinconnus",
				},
				{
					name: "Je l&#39;embrasse ou elle m&#39;embrasse en premier, tout se passe vite, nous sommes tous les deux nus.",
					redirect: "pasrisque",
				},
				{
					name: "Je commence à enlever ma chemise et je lui demande si elle est à l&#39;aise.",
					redirect: "consentement",
				},
			]
		},
    },
	consentement : {
		getText() {
			return "Je l&#39;aide à se déshabiller et nous sommes maintenant tous les deux sur le lit.";
		},
		getOptions() {
			return [
				{
					name: "Je lui demande si c&#39;est sa première fois, alors le rapport n&#39;est pas à risque.",
					redirect: "premierefois",
				},
				{
					name: "Je lui demande de quand date son dernier dépistage.",
					redirect: "confiance",
				},
				{
					name: "Peu importe sa condition, je me protège toujours.",
					redirect: "proteger",
				},
				{
					name: "Je ne tiens pas compte des risques et profite de la situation.",
					redirect: "pasrisque",
				},
			]
		},
    },
	lesinconnus : {
		getText() {
			return "*image des inconnus";
		},
		getOptions() {
			return [
				{
					name: "Je l&#39;embrasse ou elle m&#39;embrasse en premier, tout se passe vite, nous sommes tous les deux nus.",
					redirect: "pasrisque",
				},
				{
					name: "Je commence à enlever ma chemise et je lui demande si elle est à l&#39;aise.",
					redirect: "consentement",
				},
			]
		},
    },
	premierefois : {
		getText() {
			return "Je lui fait confiance et on ne se protège pas pendant le rapport.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "end",
				},
			]
		},
    },
	confiance : {
		getText() {
			return "Elle n&#39;a pas de justuficatif sur elle mais je lui fait confiance. On ne se protège pas pendant le rapport.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "end",
				},
			]
		},
    },
	pasrisque : {
		getText() {
			return "Nous passons une nuit légendaire ensemble. *gif legendary";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "end",
				},
			]
		},
    },
	proteger : {
		getText() {
			return "Je sors mon préservatif/Je vais chercher un préservatif@globulus@. Nous avons un rapport protégé.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "end",
				},
			]
		},
    },
	end : {
		getText() {
			return "Tu te réveilles le lendemain chez Billy et croises Manuel à la table du petit déjeuner.";
		},
		getOptions() {
			return [
			]
		},
    },
	fredsuite : {
		getText() {
			return "- Après le mieux c&#39;est toujours de ne pas attraper d&#39;IST qui peuvent avoir de grosses conséquences sur ta santé.<br>- Merci d&#39;avoir partagé ça avec moi.";
		},
		getOptions() {
			return [
				{
					name: "...",
					redirect: "actionbis",
				},
			]
		},
    },
	final : {
		getText() {
			finalText = "-Hey !\n-Hey !\n-Alors hier soir, ça s'est bien passé avec l\’autre fille ?";
			if (trobu){
				finalText = finalText +  "-L’autre fille ? J'ai un peu trop bu, il s’est passé quoi au juste ?\n-Ah bah ça c'est à toi de me le dire ! Je t’ai juste entrevu entrer dans la chambre avec Morgane et le courant avait l’air de bien passer entre vous.\n-...\n-Tu devrais la contacter pour en savoir plus, et potentiellement faire un dépistage. Tu n’aurais sûrement pas dû boire autant\n-Ouai j’ai clairement abusé… J’espère que rien de grave n’en ressortira.\n-Tu as pensé à amener des protections au moins."
				if(noCap){
					finalText = finalText + "-...\n-Là tu as vraiment merdé ! Franchement ça t’aurais couté quoi de prendre une capote avec toi. T’as potentiellement chopé la chtouille ou qui sait quoi.\n-Ok j’ai compris. J’aurais vraiment dû agir différemment."
				}
				else if(capPerime){
					finalText = finalText + "-Bien sûre j’en ai attrapé une au fond d’un tiroir avant de partir.\n-Et j’imagine que t’as pas pris le temps de regarder la date de péremption.\n-Comme si c’était vraiment important.\n-Ça l’est. Elle a pu craqué hier et t’en aurais aucune idée vu que tu t’es bourré la gueule.\n-Ok j’ai compris. J’aurais vraiment dû agir différemment."				
				}
				else if(cap){
					finalText = finalText + "-Bien sûr, je suis parti en acheter avant de venir à la soirée.\nT’as au moins ça pour toi, vas te faire dépister au cas où et ne boit plus autant sérieusement.\n-Oui je retiendrais la leçon."	
				}
			}
			else if(sexeUnsafe){
				finalText = finalText + "-C’était génial ! J’espère la revoir.\n-Cool, vous vous êtes protégés au moins ?\n-On croirait entendre ma mère ! Non on ne s'est pas protégé mais je ne suis pas idiot, je lui ai demandé et elle m'a garrantit que c'était sans danger.\n-Bah bien sûr, car tu peux totalement faire confiance à une inconnue et potentiellement avoir une IST incurable maintenant.\n-Tu dramatises.\n-Vas te faire dépister quand même c’est gratuit, sans ordonnance et sans rendez-vous.\n-Ok, peut-être que j'aurais pu faire différemment, je vais écouter ton conseil."	
			}
			else if(sexeSafe){
				finalText = finalText + "-C’était génial ! J’espère la revoir.\n-Cool, vous vous êtes protégés au moins ?\n-Évidement, tu me prends pour qui ?\n-Bah bravo champion, tiens moi au courant de comment ça évolue.\n-Avec plaisir."	   
			}
			return finalText
		},
    },
}