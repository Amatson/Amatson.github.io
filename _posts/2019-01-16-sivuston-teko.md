---
layout: article
title: "Sivuston tekovaiheita"
date: 2019-01-17
excerpt_separator: <!--more-->
image:
  teaser: teaser_heart_code.jpg
---

# Omat nettisivut häitä varten? Noniin!
<!--more-->
Kääritään hihat ja aletaan hommiin.

Sivusto on toteutettu suhteellisen vähällä vaivalla (ainakin mahdollisuuksiin nähden), ja tämä blogipostaus kokoaa hieman vaiheita sekä omaksi projektidokumentaatioksi, että sivustolla vierailijoiden ohjeistukseksi.

Pientä kokemusta nettisivuista itsellä oli jo entuudestaan, ja yliopiston kurssit auttoivat ymmärtämään niinkin arkipäiväisen vaikeita asioita kuin HTML, Javascript ja git. Syvään päähän ei omien sivujen kanssa onneksi tarvitse sukeltaa. Todella pitkälle pärjää englanninkielen taidolla sekä ohjeiden orjallisella noudattamisella. Vaativampi kikkailu edellyttää soveltamistaitoja. Mutta se siitä, katsotaan miten pitkälle päästään.

Aloitetaan!

## Github Pages

Sivustoa ylläpidetään, päivitetään ja hallinnoidaan Githubin kautta. Github on versiohallintapalvelu, joka tarkoittaa siis tuottamasi sisällön kannalta sitä, että voit tallentaa eri vaiheet kätevästi nettiin, lisätä välikommentteja jokaiseen päivitysvaiheeseen, palata edellisiin vaiheisiin, muodostaa uuden "haaran" versioosi ja hallita lopputulokseen tähtäävän kokonaisuutesi eri vaiheita. Git on yksi versiohallintaväline, jota Github-sivusto yhtenä esimerkkinä ylläpitää. Git osoittaa voimansa useiden ihmisten työstäessä saman projektin eri osia ja vaiheita. Yksin puurtaessa se ei juurikaan tuo lisäetua, jos muistat mitä muutoksia teit ennen kuin asiat päättivät räjähtää. Git ja Github eivät ole hyödyllisiä pelkästään ohjelmoijalle, vaan sitä voi hyvin kuvitella käyttävän esimerkiksi graafikot, kirjailijat, taulukkolaskentaa hyödyntävät tai vaikka päiväkirjaa pitävät.

Githubin käyttäjä voi hyödyntää Github Pages -nettisivujärjestelmää. Käytännössä se tarkoittaa sitä, että Githubiin laitettu nettisivun koodi pyöräytetään Githubin palvelimella, jonka jälkeen sivusto tupsahtaa valmiina ulos omalla, Githubin alaisella nettiosoitteella.
Tässä esimerkki: oma Github-käyttäjätunnukseni on Amatson. Github-projektini löytyvät osoitteella github.com/amatson. Githubin hallinnoimat nettisivustoni taas löytyvät osoitteesta amatson.github.io
Nämä sivut ovat oma "sivustonsa" osoitteessa amatson.github.io/julmat
Githubiin voi muodostaa useita sivustoja, vaikkapa jokaiselle projektille. Nämä ns. alisivut saattavat vaatia hieman enemmän ymmärrystä aiheesta, sillä sivujen sisäiset linkit voivat ohjata vahingossa pääsivustolle (xx.github.io/yy sivuston linkit on määritettävä ohjaamaan tuohon .../yy sivun osoitteisin, esimerkiksi .../yy/blogijuttu, ettei sivusto ohjaa linkkiä käyttävää xx.github.io/blogijuttu sivulle, jota ei sitten olekaan olemassa).
Pääsivuston käytän suhteen pääsee samalla tapaa alkuun kuin alisivustojenkin kanssa.

Eli kohta 1.
Github tunnusten luonti (se on ilmaista).

[Github.com](https://github.com/)

Seuraavaksi luodaan uusi repository-projekti"kansio" ja seurataan githubin ohjeita sivuston aloittamisessa.

[Github Pages ohjeet](https://guides.github.com/features/pages/)

Githubin sisällä voikin sitten muokata tiedostoja ja tehdä versiohallintaan päivityksiä, mitkä sitten päivittyvät vasta luodulle sivupohjalle. Jos tavoitteena on tehdä vain yhden sivun "portfolio" ilman alisivuja, lisälinkkejä tai muuta monimutkaista niin onneksi olkoon! Olet valmis ja sinulla on nyt nettisivut valmiina!

Lisämaustetta sivuihisi saat opettelemalla hieman markdown eli merkintäkielen alkeita. Näin pystyt tuottamaan
#### otsikoita,
[linkkejä](https://fi.wikipedia.org/wiki/Hyperlinkki)
tai ihan vaan _eri_ **tekstityylejä**.

[Markdown opas (englanniksi)](https://guides.github.com/features/mastering-markdown/)


## Teemat ja Jekyll

Seuraavaksi kastetaan jalkoja syvään päähän.

Github-sivut toimivat näppärästi [Jekyll-ohjelman](https://jekyllrb.com/) päällä. Sen avulla voi kohtalaisen vaivattomasti luoda staattista (lue: pysyvää, ei niitä dynaamisia nettisivuja jotka suorittaa jotain jatkuvia suoritteitaan) sisältöä. Blogien pitämiseen se on täydellinen työkalu.

Jekyll:n hallintaa varten oma toimenpiteeni jatkui seuraavasti: latasin github-projektin omalle koneelleni, muokkasin ja loin lisää sisältöä [Atom-editorin](https://atom.io/) kautta (mikä tahansa muukin editointiohjelma käy, vaikka notepad, mutta joku kehittyneempi ratkaisu helpottaa esimerkiksi gitin käyttöä sekä kansiorakenteen hallintaa).

Jekyll:stä lisää kohta. Sitä ennen pikainen katsastus teemoihin.
Githubissa oli mahdollisuus vaihtaa sivuston teemaa lennosta projektikansion asetuksista. Lisää teemoja on ladattavissa ilmaiseksi esimerkiksi [täältä](https://jekyllthemes.io/free). Teemat ovat käytännössä valmiita nettisivupohjia, joihin voi itse luoda sisältöä ja joita voi itse tuunailla omiin tarpeisiinsa sopivaksi. Ja nyt Jekyll tulee mukaan. Jekyll mahdollistaa sen, että tuottamalla staattista sisältöä HTML- tai MarkDown-muodossa voi kirjoittaa sivun pohjan vain kerran ja sen jälkeen hyödyntää valmista pohjaa kaikkeen sisältöön jota tuottaa. Esimerkiksi kertomalla blogitekstinsä alussa Jekyll-ohjelmalle haluavansa käyttää artikkeli-pohjaa tai valokuvakansio-näkymää, saa sisällöstä aivan eri näköisen riippuen siitä onko käyttäjä etusivulla, blogia selaamassa tai matkakuvakansion antimia ihailemassa. Tästä esimerkkinä näiden sivujen etusivu, jossa on tyylikäs taustakuva sekä nippu blogilinkkejä, verrattuna yksittäisen blogin näkymään ilman taustakuvaa tai muuta katseenvangitsijaa.

Teema ja Jekyll kulkevat näin käsi kädessä. Näiden sivujen pohjalla on käytetty [Skinny Bones](https://mmistakes.github.io/skinny-bones-jekyll/) teemaa, jonka voi ottaa helposti haltuun [näiden ohjeiden](https://mmistakes.github.io/skinny-bones-jekyll/getting-started/) avulla. Itse en tämän projektin kohdalla asentanut Jekyll-kääntäjää koneelle, vaan tuotin sisällön ja työnsin materiaalin tekstieditorista (Atom) suoraa Githubin riesaksi.

Tutkimalla Jekyll-koodia ja tiedostoja pääsee pitkälle. Näiden sivujen tuottaminen alkoi 14.1. ja tätä ohjeistusta kirjoitetaan käytännössä valmiille sivuille 17.1., väliin toki mahtuu hieman tuskastelua oikeiden asetusten löytämisessä koodin seasta, mutta käytännössä parissa päivässä näinkin toimivat nettisivut on saatavissa pystyyn.

## Viimeistely

Sivuthan eivät ole mitään ilman kivaa osoitetta. Onkin enää vuorossa julmat.fi domainnimen varaaminen [Ficoralta](https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset) (ent. viestintäviraston domainhallinta), joka taas vaatii joko verkkotunnusvälittäjän etsimisen, joka hoitaa jotain maksua vastaan domainin hankkimisen, tai ryhtymällä itse verkkotunnusvälittäjäksi ja maksamalla vain Ficoran rekisteröintimaksun nettisivusta 9€/vuosi. Älkää tulko kysymään voinko rekisteröidä teille domainin. Sellainen palvelu vaatii asiaan perehtymistä ja oikeasti vastuiden ja velvollisuuksien tuntemista ja niistä piittaamista. Tällä hetkellä olen itse ainoa joka voi valittaa, ja ainoastaan itselleni.

Tai no, toki voitte kysyä, älkää pahastuko jos suosittelen jotain oikeasti pätevää palveluntarjoajaa, kuten [Domainhotelli](https://www.domainhotelli.fi/) tai [Louhi](https://www.louhi.fi/)

## JA SIINÄPÄ SE!

Hauskaahan se on jos on aikaa ja jaksaa nähdä vaivaa, mutta loppujen lopuksi ei vaivaakaan tarvitse suunnattomasti nähdä. Laittakaahan nettisivuja pystyyn, se on tänä päivänä helpompaa kuin koskaan!
