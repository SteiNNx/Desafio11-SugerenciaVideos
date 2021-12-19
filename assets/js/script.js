/**
 * @class Multimedia
 */
class Multimedia {
    /**
     * @constructor
     * @param {string} url 
     */
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (newUrl) => _nombre = newUrl;
    }

    /**
     * Getters
     */
    get url() {
        return this.getUrl();
    }

    /**
     * Setters
     */
    set url(newUrl) {
        this.setUrl(newUrl);
    }

    /**
     * @function setInicio
     */
    setInicio() {
        console.log('“Este método es para realizar un cambio en la URL del video”.');
    }
}

/**
 * @class Reproductor
 */
class Reproductor extends Multimedia {
    /**
     * 
     * @param {string} url 
     * @param {string} id 
     */
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (newId) => _id = newId;
    }
    /**
     * Getters
     */
    get id() {
        return this.getId()
    }
    /**
     * Setters
     */
    set id(newId) {
        this.setId(newId);
    }
    /**
     * @function playMultimedia
     */
    playMultimedia() {
        setIframe.responseSetIframePrivateFunction(this.getUrl(), this.getId());
    }
    /**
     * @function setInicio
     */
    setInicio(timeVideo) {
        const iframeElement = document.getElementById(this.getId());
        iframeElement.setAttribute('src', `${this.getUrl()}?start=${timeVideo}`);
    }
}

/**
 * 1.-Implementar el Patrón Módulo mediante IIFE, en donde:
 */
const setIframe = (() => {
    const setIframePrivate = (newUrl, newId) => {
        const iframeElement = document.getElementById(newId);
        iframeElement.setAttribute('src', newUrl);
    }
    return {
        responseSetIframePrivateFunction: setIframePrivate,
    }
})();

/** Musica */
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/Sw8_fWj_5oQ', 'musica');
reproductorMusica.playMultimedia();
reproductorMusica.setInicio('20');

/** Pelicula */
const reproductorPeliculas = new Reproductor('https://www.youtube.com/embed/ZYzbalQ6Lg8', 'peliculas');
reproductorPeliculas.playMultimedia();
reproductorPeliculas.setInicio('150');

/** Serie */
const reproductorSeries = new Reproductor('https://www.youtube.com/embed/VBXJzYwR5h4', 'series');
reproductorSeries.playMultimedia();
reproductorSeries.setInicio('130');


