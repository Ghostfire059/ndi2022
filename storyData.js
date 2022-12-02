const storyData = {
	step1 : {
		getText() {
			return "Première soirée<br>Je rencontre une belle personne, elle nous plaît, je lui plaît et on finit dans une chambre.";
		},
		getOptions() {
			return [
				{
					name: "Je lui propose un calin ",
					redirect: "step2",
				},
				{
					name: "J&#39;enlève d&#39;abord ma chemise ",
					redirect: "step3",
				},
			]
		},
    },
	step2 : {
		getText() {
			return "Je m&#39;assois sur le bord du lit et elle fait de même.";
		},
		getOptions() {
			return [
				{
					name: "Je lui demande si elle aime le chocolat",
					redirect: "step6",
				},
				{
					name: "Je lui demande si elle est à l&#39;aise si j&#39;enlève ma chemise",
					redirect: "step7",
				},
				{
					name: "Je l&#39;interroge sur ses expériences passées",
					redirect: "step8",
				},
			]
		},
    },
	step3 : {
		getText() {
			return "Elle t&#39;accompagne et commence à retirer son bas.<br>Vous êtes allongés sur le lit, elle me demande si je l&#39;ai déjà fait :";
		},
		getOptions() {
			return [
				{
					name: "Oui",
					redirect: "step4",
				},
				{
					name: "Non",
					redirect: "step5",
				},
			]
		},
    },
	step4 : {
		getText() {
			return "J&#39;ai dit oui !";
		},
		getOptions() {
			return [
			]
		},
    },
	step5 : {
		getText() {
			return "J&#39;ai dit non !";
		},
		getOptions() {
			return [
			]
		},
    },
	step6 : {
		getText() {
			return "Super du chocolat !!!";
		},
		getOptions() {
			return [
			]
		},
    },
	step7 : {
		getText() {
			return "Je suis tout nu !!";
		},
		getOptions() {
			return [
			]
		},
    },
	step8 : {
		getText() {
			return "On est parti pour discuter toute la soirée !";
		},
		getOptions() {
			return [
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
		},
    },
}