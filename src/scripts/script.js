/*
class Seasonal

runs during the loading of the page
gets all elements that are classed as seasonally affected
gets the current month and checks if this month has a seasonal variation
if it does, replace the src or href of the element to recieve the prefix of that season
  > e.g. "Pride_", "Christmas_" 
*/
class Seasonal {
    constructor() {
        this.affect = document.getElementsByClassName("seasonal");
        this.date = new Date();
        this.month = this.date.getMonth();

        this.conditions = {
            0:  false,
            1:  false,
            2:  false,
            3:  false,
            4:  false,
            5:  "Pride_", /*<3*/
            6:  false,
            7:  false,
            8:  false,
            9:  false,
            10: false,
            11: "Christmas_",
        }

        if (this.conditions[this.month]) {
            this.tisTheSeason(this.conditions[this.month]);
        }
    }

    tisTheSeason(tag) {
        for (const element of this.affect) {
            if (element.src) {
                element.src = this.splatted(element.src, tag);
            } else if (element.href) {
                element.href = this.splatted(element.href, tag);
            }
        }
    }

    splatted(splatify, tag) {
        const splat = splatify.split("/");
        const final = splat.length - 1;

        splat[final] = tag + splat[final];
        
        return splat.join("/");
    }
}

new Seasonal()