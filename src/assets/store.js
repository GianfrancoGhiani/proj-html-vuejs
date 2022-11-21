import { reactive } from "vue";

export const store = reactive({
    topMenu:['home', 'apple', 'microsoft', 'android', 'forums', 'contanct us'],
    footLinks:[

        ['avada tech forum', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate nihil magnam, ratione deleniti deserunt quidem minima libero labore ea culpa repudiandae aliquid commodi accusamus inventore vel veritatis consequuntur officiis'],
    ['popular topics', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat'],
    ['recent topics', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat','Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat','Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat','Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat'],
    ['latest replies','Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, repellat']
    ],
    forumIcons:[
        '<i class="fa-solid fa-file-lines"></i>', '<i class="fa-brands fa-apple"></i>', '<i class="fa-brands fa-windows"></i>', '<i class="fa-brands fa-android"></i>', '<i class="fa-solid fa-mug-saucer"></i>', '<i class="fa-solid fa-cubes"></i>', '<i class="fa-solid fa-laptop"></i>', '<i class="fa-solid fa-wrench"></i>'
    ],

})