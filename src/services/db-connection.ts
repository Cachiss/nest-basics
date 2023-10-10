import { MongooseModule } from '@nestjs/mongoose';

export const connectToDatabase = () => {
    return MongooseModule.forRoot(process.env.MONGODB_URI);
};