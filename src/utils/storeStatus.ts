export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
} {
  try {
    // Current time in Brazil (Recife / Pernambuco - America/Recife is UTC-3)
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Recife',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const hourPart = parts.find((p) => p.type === 'hour');
    const minPart = parts.find((p) => p.type === 'minute');
    const weekdayPart = parts.find((p) => p.type === 'weekday')?.value.toLowerCase() || '';

    const hour = hourPart ? parseInt(hourPart.value, 10) : now.getHours();
    const minute = minPart ? parseInt(minPart.value, 10) : now.getMinutes();

    // In Brazil, Sunday is 'dom.' or 'domingo'
    const isSunday = weekdayPart.startsWith('dom');

    if (isSunday) {
      return {
        isOpen: false,
        statusText: 'Fechado hoje (Domingo)',
        nextChangeText: 'Reabrimos segunda às 10h',
      };
    }

    // Monday through Saturday: 10h to 19h
    const currentTimeDecimal = hour + minute / 60;
    const isOpen = currentTimeDecimal >= 10 && currentTimeDecimal < 19;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: 'Loja aberta agora',
        nextChangeText: 'Atendimento presencial até 19h',
      };
    } else if (currentTimeDecimal < 10) {
      return {
        isOpen: false,
        statusText: 'Fechado no momento',
        nextChangeText: 'Abrimos hoje às 10h',
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Fechado por hoje',
        nextChangeText: 'Reabrimos amanhã às 10h',
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Segunda a Sábado',
      nextChangeText: '10h às 19h',
    };
  }
}
