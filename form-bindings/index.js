function ViewModel() {
    var self = this;

    self.listaItens = ko.observableArray([]);
    self.descricaoItem = ko.observable("");
    
    self.alerta = ko.observable({mostrar: false, mensagem: "Teste", tipo: "info"});
    
    self.incluirItem = function() {
        if(self.descricaoItem() == "") {
            self.alerta({mostrar: true, mensagem: "Preencha a descrição do item!", tipo: "warning"})
        } else {
            self.listaItens.push({descricao: self.descricaoItem(), check: false});
            self.descricaoItem("");
            self.alerta({mostrar: true, mensagem: "Item incluído com sucesso!", tipo: "info"})
        }
    };

}

vm = new ViewModel();

ko.applyBindings(vm);