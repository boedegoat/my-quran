-- CreateTable
CREATE TABLE "surahs" (
    "id" INTEGER NOT NULL,
    "sequence" INTEGER NOT NULL,
    "number_of_verses" INTEGER NOT NULL,
    "name" JSONB NOT NULL,
    "revelation" JSONB NOT NULL,
    "tafsir" JSONB NOT NULL,
    "preBismillah" JSONB,

    CONSTRAINT "surahs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verses" (
    "id" INTEGER NOT NULL,
    "inSurah" INTEGER NOT NULL,
    "surah_id" INTEGER NOT NULL,
    "meta" JSONB NOT NULL,
    "text" JSONB NOT NULL,
    "translation" JSONB NOT NULL,
    "audio" JSONB NOT NULL,
    "tafsir" JSONB NOT NULL,

    CONSTRAINT "verses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "verses" ADD CONSTRAINT "verses_surah_id_fkey" FOREIGN KEY ("surah_id") REFERENCES "surahs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
