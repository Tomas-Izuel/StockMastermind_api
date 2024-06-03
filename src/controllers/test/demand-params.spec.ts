import { Test, TestingModule } from "@nestjs/testing";
import { DemandParamsController } from "../demand-params.controllers";

describe("DemandParamsController", () => {
    let controller: DemandParamsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DemandParamsController],
        }).compile();

        controller = module.get<DemandParamsController>(DemandParamsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
