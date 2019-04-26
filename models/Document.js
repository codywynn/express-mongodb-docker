// Defines data model for a Document object
module.exports = class Document {
    constructor(title, username, body) {
        this.title = title
        this.username = username
        this.body = body
    }
}