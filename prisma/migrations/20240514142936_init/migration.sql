-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleInventory" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,

    CONSTRAINT "ArticleInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleOrder" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "puchaseOrderId" INTEGER NOT NULL,

    CONSTRAINT "ArticleOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PuchaseOrder" (
    "id" SERIAL NOT NULL,
    "total" TEXT NOT NULL,

    CONSTRAINT "PuchaseOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArticleInventory" ADD CONSTRAINT "ArticleInventory_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleInventory" ADD CONSTRAINT "ArticleInventory_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleOrder" ADD CONSTRAINT "ArticleOrder_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleOrder" ADD CONSTRAINT "ArticleOrder_puchaseOrderId_fkey" FOREIGN KEY ("puchaseOrderId") REFERENCES "PuchaseOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
