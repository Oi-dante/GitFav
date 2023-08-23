class Favorites{
  constructor(root){
    this.root = document.querySelector(root)
  }
}

// classe que vai criar a visualização dos eventos
export	class FavoritesViwe extends Favorites {
  constructor(root) {
    super(root)
  }
}