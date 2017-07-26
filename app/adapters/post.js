import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "http://127.0.0.1:8888/api",
    //namespace: "",
    pathForType() {
        return "listaEstados";
    }
});