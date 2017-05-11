/**
 * Created by jc463121 on 11/05/17.
 */
function changeYearText(year) {
	var i;
	for (i = 1; i < 14; i++) {
				document.getElementById("historyNavBar" + i.toString()).classList.remove('active');
				}
    switch (year) {

        case "2003":
            document.getElementById("yearText").textContent = "In 2003 the Council’s centenary year the Orchestra took part in Encore, as well as playing a major role in the Townsville Civic Theatre’s 25th Anniversary productions of Noye’s Fludde and Carmina Burana.";
            document.getElementById("historyNavBar1").classList.add('active');
            break;

        case "2004":
            document.getElementById("yearText").textContent = "In 2004, the Orchestra presented its first subscription series of three concerts receiving sponsorship from Queensland Nickel – Yabulu. The high standard is due in no small measure to the guidance and inspiration of our founding Patron, Professor John Hopkins OBE and conductor Richard McIntyre OAM.";
			document.getElementById("historyNavBar2").classList.add('active');

            break;

        case "2005":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar3").classList.add('active');
            break;

        case "2006":
            document.getElementById("yearText").textContent = "In 2006 the orchestra became a truly North Queensland orchestra when in March a number of string players from Cairns travelled to Townsville to rehearse under Professor Hopkins for the planned Tchaikovsky concert. Unfortunately, the interruption of Cyclone Larry prevented the repeat performance scheduled for Cairns. The final concert for 2006 , ‘Amadeus’, celebrated the life of this great composer in his 250th anniversary year. The Barrier Reef Orchestra could think of no better way in which to celebrate their sixth anniversary!";
			document.getElementById("historyNavBar4").classList.add('active');
            break;

        case "2007":
            document.getElementById("yearText").textContent = "In 2007 BRO performed the Beethoven Triple Concerto with visiting Seraphim Trio from Melbourne. The orchestra repeated the concert in Cairns with no Cyclone Larry this time! A string ensemble drawn from the larger orchestra was invited by Piers Lane the new Director of the AFCM, to perform for the first time in the Australian Festival of Chamber Music, accompanying Australian Opera Baritone Peter Coleman-Wright, a very successful concert. The Governor of Queensland became the patron of the Orchestra joining the founding patron Professor John Hopkins to inspire the further development of the orchestra and the year culminated in a sell out concert featuring James Morrison, conductor Sean O”Boyle, jazz vocalist Emma Pask and a collaboration with Townsville Brass and the rythym section from the amazing 1 RAR Band. The event of the year!";
			document.getElementById("historyNavBar5").classList.add('active');
            break;

        case "2008":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar6").classList.add('active');
            break;

        case "2009":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar7").classList.add('active');
            break;

        case "2010":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar8").classList.add('active');
            break;

        case "2011":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar9").classList.add('active');
            break;

        case "2012":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar10").classList.add('active');
            break;

        case "2013":
            document.getElementById("yearText").textContent = "New text";
			document.getElementById("historyNavBar11").classList.add('active');
            break;

        case "2014":
            document.getElementById("yearText").textContent = "New text5";
			document.getElementById("historyNavBar12").classList.add('active');
            break;

        case "2015":
            document.getElementById("yearText").textContent = "New text2";
			document.getElementById("historyNavBar13").classList.add('active');
            break;

    }


}
