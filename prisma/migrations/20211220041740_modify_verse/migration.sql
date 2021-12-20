/*
  Warnings:

  - Added the required column `first_verse_in_juz` to the `verses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "verses" ADD COLUMN     "first_verse_in_juz" BOOLEAN NOT NULL;
