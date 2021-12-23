-- AlterTable
ALTER TABLE "users" ADD COLUMN     "last_verse_id" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_last_verse_id_fkey" FOREIGN KEY ("last_verse_id") REFERENCES "verses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
