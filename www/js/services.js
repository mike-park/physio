angular.module('starter.services', [])
  .factory('Pages', function () {
    var pages = {
      0: {
        title: 'Physio',
        links: [
          { nextId: 1, title: 'Die Behandlung'},
          { nextId: 1, title: 'Ursachen'},
          { nextId: 1, title: 'Gesundheitssysteme'}
        ]
      },
      1: {
        title: 'Die Behandlung',
        links: [
          { nextId: 10, title: 'Wie lange dauert die Therapie?', description: 'Lorem ipsum dolor sit amet, consectetur.' },
          { nextId: 10, title: 'screening', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
          { nextId: 10, title: 'Anamnese', description: 'Lorem ipsum dolor sit amet, consectetur.' },
          { nextId: 10, title: 'Untersuchung', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cupiditate eius facere fuga illo impedit, ipsum iure magni, maiores modi nostrum numquam optio repellendus reprehenderit saepe vero voluptas voluptatum!' },
          { nextId: 10, title: 'Planaufstellung', description: 'Lorem ipsum dolor.' },
          { nextId: 10, title: 'Ausführung', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
          { nextId: 10, title: 'Checkup', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laudantium nemo quae tempora.' }
        ]},
      10: {
        title: 'Info',
        content: '<div class="card">' +
          '<div class="item item-divider">Wie lange dauert die Therapie?</div>' +
          '<div class="item item-text-wrap">' +
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at doloribus facere fuga harum ipsa laudantium nisi, nobis omnis pariatur quisquam rem rerum suscipit tenetur! Consectetur dolorem minus nam!</p>' +
          '<ul><li>Spontane Beschwerden</li><li>chronische Beschwerden</li><li>rezidivierende Beschwerden</li></ul></div></div>'
      }
    };

    return {
      all: function () {
        return pages;
      },
      get: function (id) {
        return pages[id];
      }
    }
  });
