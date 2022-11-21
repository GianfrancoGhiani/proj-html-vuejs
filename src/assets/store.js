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
    products:{
        mobilePhone:{
            url: '/img/post_feat_img_25-700x441.jpg',
            name:'Morbi vitae dui euismod vulputate sollicitudin',
            date: 'October 11th, 2015',
            comments_counter: 2,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        mobilePhoto: {
            url: '/img/post_feat_img_24-700x441.jpg',
            name:'Vivamus pellenteque, felis quis varius',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        smartWatch:{
            url: '/img/post_feat_img_23-700x441.jpg',
            name:'Donec ornare pretium eget scelisque justo',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        }

    }
})