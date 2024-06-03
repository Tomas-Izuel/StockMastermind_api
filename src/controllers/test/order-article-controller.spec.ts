import { Test, TestingModule } from "@nestjs/testing";
import { OrderArticleController } from "../order_article.controller";

describe('OrderArticleController', () => {
    let controller: OrderArticleController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OrderArticleController],
        }).compile();

        controller = module.get<OrderArticleController>(OrderArticleController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

