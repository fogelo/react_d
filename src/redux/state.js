  let state = {
      dialogsPage: {
        dialogs: [
            {name: 'Sveta', id: '1'},
            {name: 'Andrey', id: '2'},
            {name: 'Anna', id: '3'},
            {name: 'Dmitriy', id: '4'},
            {name: 'Vladimir', id: '5'},
          ],
          messages: [
            {message: 'What do you do?', id: '1'},
            {message: 'Where are you?', id: '2'},
            {message: 'What is your name?', id: '3'},
          ],
      },
      profilesPage: {
        posts: [
            {id: '1', message: 'How are you?', likeCount: '20'},
            {id: '2', message: 'Are you ok?', likeCount: '225'},
            {id: '3', message: 'What is your name?', likeCount: '3'},
            {id: '4', message: 'Where do you live?', likeCount: '45'},
          ],
      }
  }


  export let addPost = (postMessage) => {

    let newPost = {id: '5', message: postMessage, likeCount: '0'}
    state.profilesPage.posts.push(newPost)
    console.log(state.profilesPage.posts)
    }
  export default state