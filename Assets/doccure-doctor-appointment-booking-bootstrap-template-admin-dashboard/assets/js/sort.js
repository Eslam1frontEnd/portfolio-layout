let field = document.querySelector('.items');
let li = Array.from(field.children);

    function sortProduct() {
        let select = document.getElementById('selector');
        let ar = [];
        for(let i of li){
            const last = i.querySelector('strong');
            const x = last.textContent.trim();
            const y = parseInt(x.substring(1));
            i.setAttribute("data-price", y);
            ar.push(i);

            const rate = i.querySelector('.average-rating');
            const c = rate.textContent.trim();
            const j = parseInt(c.substring(1));
            i.setAttribute("data-rating", j);
            ar.push(i);

            const popularity = i.querySelector('.Popularity');
            const e = popularity.textContent.trim();
            const z = parseInt(e.substring());
            i.setAttribute("data-popularity", z);
            ar.push(i);
        }
        this.run = ()=>{
            addevent();
        }
        function addevent(){
            select.onchange = sortingValue;
        }
        function sortingValue(){
        
            if (this.value === 'Default') {
                while (field.firstChild) {field.removeChild(field.firstChild);}
                field.append(...ar);	
            }
            if (this.value === 'Amount') {
                sortElemByAmount(field, li)
            }
            if (this.value === 'Rating') {
                sortElemByRate(field, li)
            }
            if (this.value === 'Popular') {
                sortElemByPopularity(field, li)
            }
        }
        function sortElemByAmount(field,li){
            let sortli = li.sort((a,b)=>{
                return a.getAttribute('data-price') - b.getAttribute('data-price');
            })
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortli);
        }

        function sortElemByRate(field,li){
            let sortli = li.sort((a,b)=>{
                return b.getAttribute('data-rating') - a.getAttribute('data-rating');
            })
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortli);
        }

        function sortElemByPopularity(field,li){
            let sortli = li.sort((a,b)=>{
                return b.getAttribute('data-popularity') - a.getAttribute('data-popularity');
            })
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortli);
        }
    }

    new sortProduct().run();