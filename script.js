const products=[
 {id:1,name:"CORE OVERSIZED TEE",price:699,category:"tshirts",kind:"tee",tag:"BESTSELLER"},
 {id:2,name:"MONOCHROME PRINT TEE",price:799,category:"tshirts",kind:"tee",tag:"NEW"},
 {id:3,name:"URBAN OXFORD SHIRT",price:1199,category:"shirts",kind:"shirt",tag:"LIMITED"},
 {id:4,name:"RELAXED STREET SHIRT",price:1099,category:"shirts",kind:"shirt",tag:"NEW"},
 {id:5,name:"AFTER DARK HOODIE",price:1499,category:"hoodies",kind:"hoodie",tag:"POPULAR"},
 {id:6,name:"ESSENTIAL PULLOVER",price:1599,category:"hoodies",kind:"hoodie",tag:"NEW"},
 {id:7,name:"DAILY BLACK TEE",price:599,category:"tshirts",kind:"tee",tag:"ESSENTIAL"},
 {id:8,name:"SIGNATURE OVERSHIRT",price:1299,category:"shirts",kind:"shirt",tag:"DROP 01"}
];
let cart=[];
const grid=document.getElementById('productGrid');
const toast=document.getElementById('toast');
function money(n){return '₹'+n.toLocaleString('en-IN')}
function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
function renderProducts(filter='all'){
 grid.innerHTML='';
 products.filter(p=>filter==='all'||p.category===filter).forEach(p=>{
  const card=document.createElement('article');card.className='product-card';
  card.innerHTML=`<div class="product-image ${p.kind}"><span class="image-tag">${p.tag}</span></div><div class="product-info"><h3>${p.name}</h3><p>${money(p.price)}</p><button data-add="${p.id}">ADD TO BAG +</button></div>`;
  grid.appendChild(card);
 });
}
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts(b.dataset.filter)});
grid.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.add));cart.push(p);renderCart();showToast('Added to your bag')});
function renderCart(){
 document.getElementById('cartCount').textContent=cart.length;
 document.getElementById('cartTotal').textContent=money(cart.reduce((s,p)=>s+p.price,0));
 const area=document.getElementById('cartItems');
 if(!cart.length){area.innerHTML='<p class="empty">Your bag is empty.</p>';return}
 area.innerHTML=cart.map((p,i)=>`<div class="cart-line"><div><b>${p.name}</b><br><span>${money(p.price)} · Size to be confirmed</span></div><button data-remove="${i}">REMOVE</button></div>`).join('');
}
document.getElementById('cartItems').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(!b)return;cart.splice(Number(b.dataset.remove),1);renderCart()});
const drawer=document.getElementById('cartDrawer'),overlay=document.getElementById('overlay');
function openCart(){drawer.classList.add('show');overlay.classList.add('show')}
function closeCart(){drawer.classList.remove('show');overlay.classList.remove('show')}
document.getElementById('openCart').onclick=openCart;document.getElementById('closeCart').onclick=closeCart;overlay.onclick=closeCart;
document.getElementById('checkoutBtn').onclick=()=>{
 if(!cart.length){showToast('Your bag is empty');return}
 const summary=cart.map(p=>`${p.name} - ${money(p.price)}`).join('%0A');
 const total=cart.reduce((s,p)=>s+p.price,0);
 // Replace 91XXXXXXXXXX with the brand's WhatsApp number before publishing.
 const phone='91XXXXXXXXXX';
 if(phone.includes('X')){showToast('Add your WhatsApp number in script.js first');return}
 const msg=`Hello TRYZONE! I want to place an order:%0A${summary}%0AEstimated total: ${money(total)}%0APlease confirm sizes, delivery and Cash on Delivery availability.`;
 window.open(`https://wa.me/${phone}?text=${msg}`,'_blank');
};
document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();showToast('Thanks for joining TRYZONE!');e.target.reset()});
document.getElementById('menuToggle').onclick=()=>document.getElementById('mainNav').classList.toggle('open');
renderProducts();
