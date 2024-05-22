export const createConnection = () => {
  return {
    connect() {
      console.log('✅ Connectiong...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    },
  };
};
