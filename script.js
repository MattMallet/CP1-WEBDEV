document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    // Converte as horas em minutos
    const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
    const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

    // Calcula a diferença em minutos
    let durationMinutes = endMinutes - startMinutes;

    // Se a duração for negativa, significa que a reunião passou para o dia seguinte
    if (durationMinutes < 0) {
        durationMinutes += 24 * 60; // Adiciona 24 horas em minutos
    }

    // Converte a duração em horas e minutos
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    // Exibe o resultado
    document.getElementById('durationResult').textContent = `Duração: ${hours} horas e ${minutes} minutos`;
});
