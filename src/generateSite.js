const generateSite = function(team) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
            <div>
                ${generateTeam(team)}
            </div>
        </body>
        </html>
    `;
}