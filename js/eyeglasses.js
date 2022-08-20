
const eyeglasses =[
{
    id: 1,
    name : 'Stylish eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 2,
    name : 'Classic eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 3,
    name : 'Modern eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 4,
    name : 'Elegant eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 5,
    name : 'American eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 6,
    name : 'Globally used eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 7,
    name : 'Sun Protected eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 8,
    name : 'Turkish eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 9,
    name : 'My eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 10,
    name : 'Stylish eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 11,
    name : 'Stylish eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},
{
    id: 12,
    name : 'Stylish eyeglasses',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XzpLtvlaQje-TcrqfZNJwNgl4huN2TT069TtZ_BvT9NAJdakQs3z3PGgjFU-MYVLPSY&usqp=CAU',
    price : ' 800'
},

]


const myContent = document.querySelector(".myContent");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = eyeglasses.map((project, index) => {
    return `
    <div class="col-xl-3 col-lg-4 col-md-4 col-12">
    <div class="single-product">
        <div class="product-img">
            <a href="product-details.html">
                <img class="default-img"
                    src=${project.img}
                    alt="#">
                <img class="hover-img"
                    src=${project.img}
                    alt="#">
            </a>
            <div class="button-head">
                <div class="product-action-2">
                    <a href="ItemDetails.html">Choose</a>
                </div>
            </div>
        </div>
        <div class="product-content">
            <h3><a href="product-details.html">${project.name}</a></h3>
            <div class="product-price">
                <span>Rs.${project.price}</span>
            </div>
        </div>
    </div>
</div>
        `;
  });

  myContent.innerHTML = showInHtml; }) 