const SERVICE_ICONS = [
  '💻', '📱', '🎨', '⚡', '🔧', '📊', '🛡️', '🔌', 
  '🔒', '⚙️', '🎯', '📈', '🆘', '🚀', '⛓️', '🤖', 
  '📡', '💳', '🔄', '💼'
];

export const getServiceIcon = (id: number) => 
  SERVICE_ICONS[id - 1] || '⭐';