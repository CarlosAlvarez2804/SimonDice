const russianGreen = document.getElementById('russianGreen')
const cadetBlue = document.getElementById('cadetBlue')
const charcoal = document.getElementById('charcoal')
const orangeYellow = document.getElementById('orangeYellow')
const coquelicot = document.getElementById('coquelicot')
const mediumPurple = document.getElementById('mediumPurple')
const raisinBlack = document.getElementById('raisinBlack')
const mintCream = document.getElementById('mintCream')
const turquoiseBlue = document.getElementById('turquoiseBlue')
const metallicSeaweed = document.getElementById('metallicSeaweed')
const celadonBlue = document.getElementById('celadonBlue')
const kellyGreen = document.getElementById('kellyGreen')
const maximumYellow = document.getElementById('maximumYellow')
const redRYB = document.getElementById('redRYB')
const nickel = document.getElementById('nickel')
const ghostWhite = document.getElementById('ghostWhite')
const mangoTango = document.getElementById('mangoTango')
const carnationPink = document.getElementById('carnationPink')
const celeste = document.getElementById('celeste')
const darkSalmon = document.getElementById('darkSalmon')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 100


class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 1000)

    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()
        this.nivel = 1
        this.colores = {
            russianGreen,
            cadetBlue,
            charcoal,
            orangeYellow,
            coquelicot,
            mediumPurple,
            raisinBlack,
            mintCream,
            turquoiseBlue,
            metallicSeaweed,
            celadonBlue,
            kellyGreen,
            maximumYellow,
            redRYB,
            nickel,
            ghostWhite,
            mangoTango,
            carnationPink,
            celeste,
            darkSalmon
        }
    }

    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 20))
    }

    siguienteNivel() {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventoClick()
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'russianGreen'
            case 1:
                return 'cadetBlue'
            case 2:
                return 'charcoal'
            case 3:
                return 'orangeYellow'
            case 4:
                return 'coquelicot'
            case 5:
                return 'mediumPurple'
            case 6:
                return 'raisinBlack'
            case 7:
                return 'mintCream'
            case 8:
                return 'turquoiseBlue'
            case 9:
                return 'metallicSeaweed'
            case 10:
                return 'celadonBlue'
            case 11:
                return 'kellyGreen'
            case 12:
                return 'maximumYellow'
            case 13:
                return 'redRYB'
            case 14:
                return 'nickel'
            case 15:
                return 'ghostWhite'
            case 16:
                return 'mangoTango'
            case 17:
                return 'carnationPink'
            case 18:
                return 'celeste'
            case 19:
                return 'darkSalmon'
        }

    }

    transformarColorANumero(color) {
        switch (color) {
            case 'russianGreen':
                return 0
            case 'cadetBlue':
                return 1
            case 'charcoal':
                return 2
            case 'orangeYellow':
                return 3
            case 'coquelicot':
                return 4
            case 'mediumPurple':
                return 5
            case 'raisinBlack':
                return 6
            case 'mintCream':
                return 7
            case 'turquoiseBlue':
                return 8
            case 'metallicSeaweed':
                return 9
            case 'celadonBlue':
                return 10
            case 'kellyGreen':
                return 11
            case 'maximumYellow':
                return 12
            case 'redRYB':
                return 13
            case 'nickel':
                return 14
            case 'ghostWhite':
                return 15
            case 'mangoTango':
                return 16
            case 'carnationPink':
                return 17
            case 'celeste':
                return 18
            case 'darkSalmon':
                return 19
        }

    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventoClick() {
        this.colores.russianGreen.addEventListener('click', this.elegirColor)
        this.colores.cadetBlue.addEventListener('click', this.elegirColor)
        this.colores.charcoal.addEventListener('click', this.elegirColor)
        this.colores.orangeYellow.addEventListener('click', this.elegirColor)
        this.colores.coquelicot.addEventListener('click', this.elegirColor)
        this.colores.mediumPurple.addEventListener('click', this.elegirColor)
        this.colores.raisinBlack.addEventListener('click', this.elegirColor)
        this.colores.mintCream.addEventListener('click', this.elegirColor)
        this.colores.turquoiseBlue.addEventListener('click', this.elegirColor)
        this.colores.metallicSeaweed.addEventListener('click', this.elegirColor)
        this.colores.celadonBlue.addEventListener('click', this.elegirColor)
        this.colores.kellyGreen.addEventListener('click', this.elegirColor)
        this.colores.maximumYellow.addEventListener('click', this.elegirColor)
        this.colores.redRYB.addEventListener('click', this.elegirColor)
        this.colores.nickel.addEventListener('click', this.elegirColor)
        this.colores.ghostWhite.addEventListener('click', this.elegirColor)
        this.colores.mangoTango.addEventListener('click', this.elegirColor)
        this.colores.carnationPink.addEventListener('click', this.elegirColor)
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.darkSalmon.addEventListener('click', this.elegirColor)
    }
    
    eliminarEventoClick() {
        this.colores.russianGreen.removeEventListener('click', this.elegirColor)
        this.colores.cadetBlue.removeEventListener('click', this.elegirColor)
        this.colores.charcoal.removeEventListener('click', this.elegirColor)
        this.colores.orangeYellow.removeEventListener('click', this.elegirColor)
        this.colores.coquelicot.removeEventListener('click', this.elegirColor)
        this.colores.mediumPurple.removeEventListener('click', this.elegirColor)
        this.colores.raisinBlack.removeEventListener('click', this.elegirColor)
        this.colores.mintCream.removeEventListener('click', this.elegirColor)
        this.colores.turquoiseBlue.removeEventListener('click', this.elegirColor)
        this.colores.metallicSeaweed.removeEventListener('click', this.elegirColor)
        this.colores.celadonBlue.removeEventListener('click', this.elegirColor)
        this.colores.kellyGreen.removeEventListener('click', this.elegirColor)
        this.colores.maximumYellow.removeEventListener('click', this.elegirColor)
        this.colores.redRYB.removeEventListener('click', this.elegirColor)
        this.colores.nickel.removeEventListener('click', this.elegirColor)
        this.colores.ghostWhite.removeEventListener('click', this.elegirColor)
        this.colores.mangoTango.removeEventListener('click', this.elegirColor)
        this.colores.carnationPink.removeEventListener('click', this.elegirColor)
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.darkSalmon.removeEventListener('click', this.elegirColor)
    }

    elegirColor(e) {
        const nombreColor = e.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                this.eliminarEventoClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1000)
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego() {
        swal('Felicitaciones!!', 'Ganaste el juego.', 'success')
            .then(this.inicializar)
    }

    perdioElJuego() {
        swal('Lo sentimos!!', 'Perdiste el juego.', 'error')
            .then(() => {
                this.eliminarEventoClick()
                this.inicializar()
            })
    }

}

function empezarJuego() {
    window.juego = new Juego()
}