-- CreateTable
CREATE TABLE `Site` (
    `artistNo` INTEGER NOT NULL AUTO_INCREMENT,
    `artistName` VARCHAR(191) NOT NULL,
    `instagramLink` VARCHAR(512) NULL,
    `youtubeLink` VARCHAR(512) NULL,
    `spotifyLink` VARCHAR(512) NULL,
    `email` VARCHAR(320) NOT NULL,
    `spotifyAlbumLink` VARCHAR(512) NULL,
    `patreonLink` VARCHAR(512) NULL,
    `mainImageUrl` VARCHAR(1024) NULL,
    `mainTitle` VARCHAR(512) NULL,
    `mainDescription` TEXT NULL,
    `mainVideoLink` VARCHAR(512) NULL,
    `youtubeProfileLink` VARCHAR(512) NULL,
    `shorts1` VARCHAR(512) NULL,
    `shorts2` VARCHAR(512) NULL,
    `shorts3` VARCHAR(512) NULL,
    `shorts4` VARCHAR(512) NULL,
    `galleryImageUrls` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`artistNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artist` (
    `artistNo` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(128) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    `providerId` VARCHAR(128) NULL,
    `websiteOpenYN` CHAR(1) NOT NULL DEFAULT 'N',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `loginDate` DATETIME(3) NULL,
    `isDel` CHAR(1) NOT NULL DEFAULT 'N',

    UNIQUE INDEX `Artist_id_key`(`id`),
    PRIMARY KEY (`artistNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
