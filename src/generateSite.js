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

const generateTeam = function(team) {
    html = '';

    team.forEach(employee => {
        html += `
        <h2>${employee.getName()}: ${employee.getRole()}</h2>
        <div>
            <p>Employee ID: ${employee.getID()}</p>
            <p>Employee Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            <p>${generateSpecificDetail(employee)}
        </div>
        `
    })
    return html;
}

const generateSpecificDetail = function(employee) {
    if (employee.getRole() == 'Engineer') {
        return html += `'<p>GitHub: ${employee.getGithub()}`
    } else if (employee.getRole() == 'Intern') {
        return html += `'<p>School: ${employee.getSchool()}`
    } else if (employee.getRole() == 'Manager') {
        return html += `'<p>Phone: ${employee.getOfficeNumber()}`
    } else {
        return '';
    }
}

module.exports = generateSite;