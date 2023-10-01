document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const commands = document.querySelectorAll('.command');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        commands.forEach((command) => {
            const commandName = command.querySelector('.command-name').textContent.toLowerCase();
            const commandDescription = command.querySelector('.command-description').textContent.toLowerCase();

            if (commandName.includes(searchTerm) || commandDescription.includes(searchTerm)) {
                command.style.display = 'block';
            } else {
                command.style.display = 'none';
            }
        });
    });
});
