export class News {
    private id : number = 1;
    private title : string = '';
    private description : string = '';
    private category: string = '';
    private image : string = '';

    constructor (id : number, title : string,
         description : string, category : string, image : string) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.category = category;
            this.image = image;
    }

    public getId() {
        return this.id;
    }

    public getTitle() {
        return this.title;
    }

    public getDescription() {
        return this.description;
    }

    public getCategory() {
        return this.category;
    }

    public getImage() {
        return this.image;
    } 
}