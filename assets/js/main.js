function Calculadora() {
    this.display = document.querySelector(".display");

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-apg')) this.clearDisplay(el);
            if (el.classList.contains('btn-del')) this.deleteOne(el);
            if (el.classList.contains('btn-eq')) this.calculaTudo(el);
        })
    }

    this.addNumDisplay = el => {
        const lastChar = this.display.value.slice(-1);
        const operators = ['+', '-', '*', '/'];
        
        if (operators.includes(lastChar) && operators.includes(el.innerText)) {
           
            this.display.value = this.display.value.slice(0, -1);
        }
        this.display.value += el.innerText;
    }

    this.clearDisplay = el => {
        this.display.classList.add('red-enter');
        this.display.value = '';
        setTimeout(() => {
            this.display.classList.add('red-exit');
            this.display.classList.remove('red-enter');
        }, 500);
        setTimeout(() => {
            this.display.classList.remove('red-exit');
        }, 1000);
    }

    this.deleteOne = el => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.calculaTudo = el => {
        this.display.value = eval(this.display.value);
    }

    this.inicia = () => {
        this.capturaCliques();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
