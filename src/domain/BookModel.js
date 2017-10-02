class BookModel {

    constructor(id, thumbnail, width=128, height=193, title, authors, status, selected=false){
        this.id = id;
        this.thumbnail = thumbnail;
        this.width = width;
        this.height = height;
        this.title = title;
        this.authors = authors;
        this.status = status;
        this.selected = selected;
    }

}

export default BookModel;