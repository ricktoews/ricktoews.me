function showPortfolioSite(e) {
    e.preventDefault();
    const portfolioItem = e.currentTarget.dataset['portfolio'];
    console.log('====> showPortfolioSite', portfolioItem);

    let url;
    if (portfolioItem === 'wordmage') {
        url = 'https://wordmage.app';
    }
    else if (portfolioItem === 'math-toys') {
        url = 'https://math-toys.app';
    }
    else if (portfolioItem === 'art') {
        url = 'https://art-game.vercel.app';
    }
    else if (portfolioItem === 'api-pythag') {
        url = 'https://api.math-toys.app/pythag/1';
    }
    else if (portfolioItem === 'api-recip') {
        url = 'https://api.math-toys.app/recip/109';
    }
    else if (portfolioItem === 'api-dc') {
        url = 'https://api.math-toys.app/dc/7';
    }
    else if (portfolioItem === 'api-phi') {
        url = 'https://api.math-toys.app/phi/7';
    }

    if (url) {
        var windowName = "popup";
        var windowFeatures = "width=600,height=450,scrollbars=yes";

        // Open the window
        var newWindow = window.open(url, windowName, windowFeatures);

        if (newWindow) {
            // Center the window
            newWindow.moveTo(
                window.screenX + (window.outerWidth / 2) - (newWindow.outerWidth / 2),
                window.screenY + (window.outerHeight / 2) - (newWindow.outerHeight / 2)
            );

            // Set content (replace this with your actual content or URL)
            newWindow.document.close();
        }
    }
}

export { showPortfolioSite };