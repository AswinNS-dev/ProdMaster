import mongoose from 'mongoose';

// Try different connection string formats
const connectionStrings = [
  'mongodb+srv://aswin_db:aswin123@cluster0.crjc0b1.mongodb.net/aswin_db?retryWrites=true&w=majority',
  'mongodb+srv://aswin_db:aswin123@cluster0.crjc0b1.mongodb.net/?retryWrites=true&w=majority',
  'mongodb+srv://aswin_db:aswin123@cluster0.crjc0b1.mongodb.net/test?retryWrites=true&w=majority'
];

const testConnections = async () => {
  for (let i = 0; i < connectionStrings.length; i++) {
    try {
      console.log(`\nTesting connection ${i + 1}...`);
      await mongoose.connect(connectionStrings[i]);
      console.log('✅ Connection successful with:', connectionStrings[i].replace(/:[^:@]*@/, ':****@'));
      await mongoose.disconnect();
      return connectionStrings[i];
    } catch (error) {
      console.log(`❌ Connection ${i + 1} failed:`, error.message);
    }
  }
  return null;
};

testConnections().then(workingConnection => {
  if (workingConnection) {
    console.log('\n✅ Use this connection string in your .env file:');
    console.log(workingConnection);
  } else {
    console.log('\n❌ All connections failed. Please:');
    console.log('1. Check MongoDB Atlas IP whitelist');
    console.log('2. Verify username/password');
    console.log('3. Ensure cluster is running');
  }
  process.exit(0);
});