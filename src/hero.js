const hero = () => {
    const container = document.createElement('div');
    container.classList.add("hero");

    const header = document.createElement("h1");
    header.textContent = "Olli Laine";

    container.appendChild(header);

    document.body.appendChild(container);

    return container;
};

export default hero;
