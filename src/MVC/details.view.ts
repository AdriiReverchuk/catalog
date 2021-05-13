export class DetailsView {
    renderDetals(id,details) {
        for(const [k,v] of Object.entries(details)) {
            // for(const i in v) {
            //     console.log(v[i].title)
            // }
            for(const i in v) {
               console.log(id)
            }
        }
    }
}