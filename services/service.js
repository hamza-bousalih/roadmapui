import Fetch from "@/services/FetchConfig";

class Service extends Fetch {
    constructor(baseApi) {
        super(baseApi);
    }

    findAll = async _ => await this.GET()
    findOptimized = async _ => await this.GET(`optimized`)

    create = async (item) => await this.POST('', item)
    createAll = async (items) => await this.POST('all', items)

    update = async (item) => await this.PUT('', item)
    updateAll = async (items) => await this.PUT('all', items)

    delete = async (item) => await this.DELETE('', item)
    deleteAll = async (items) => await this.DELETE('all', items)
}

class ModuleService extends Service {
    constructor(baseApi) {
        super(baseApi);
    }

    findById = async (id) => await this.GET(`${id}`)

    updateOrCreate = async (item) => await this.PUT('update-create', item)
    updateOrCreateAll = async (items) => await this.PUT('update-create/all', items)

    deleteById = async (id) => await this.DELETE(`${id}`)
}

class AssociationService extends Service {
    constructor(baseApi) {
        super(baseApi);
    }

    findByIds = async (item) => await this.POST(`id`, item)
}

export {ModuleService, AssociationService, Service};
