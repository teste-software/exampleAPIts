

export default class ClientService {
    ids = Array.from(Array(20), (_, i) => '' + (i + 1))

    getId(id: string) {
        if (this.ids.includes(id)) return 'existe';
        return 'n existe';
    }
}
