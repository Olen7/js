export function createModal(){
    return `<div class="modal-overlay" style="display:none;">
    <div class="modal">
      <h2>Edit Item</h2>
      <form action="#" id="modal-edit">
        <input type="text" placeholder="Title" name="name" class="modal-input" />
        <textarea placeholder="Description" name="description" class="modal-textarea"></textarea>
        <button type="submit" class="modal-save">Save</button>
      </form>
      <button class="modal-close">Cancel</button>
    </div>
  </div>`
}