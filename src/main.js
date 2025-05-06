//# allFunctionsCalledOnLoad
import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla__cards");
const viewportNode = emblaNode.querySelector(".embla__viewport");

EmblaCarousel(viewportNode, {
	containScroll: true,
	align: "center",
});

const emblaNodeCard = document.querySelector(".embla__cards__middle");

emblaNodeCard.querySelector(".embla__viewport");

const prevBtnNode = document.querySelector(".embla__button--prev");
const nextBtnNode = document.querySelector(".embla__button--next");
const viewportNodeCard = emblaNodeCard.querySelector(".embla__viewport");

const { scrollPrev, scrollNext } = EmblaCarousel(viewportNodeCard, {
	slidesToScroll: 1,
	containScroll: true,
	align: "center",
});

prevBtnNode.addEventListener("click", scrollPrev);
nextBtnNode.addEventListener("click", scrollNext);
