const { expect } = require("chai");
const sinon = require("sinon");
const Order = require("../../models/Order");
const Product = require("../../models/Product");
const ProductReview = require("../../models/Review");
const {
  addProductReview,
} = require("../../controllers/shop/product-review-controller");

describe("Product Review Controller", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return 403 if order status is not confirmed or delivered", async () => {
    const req = {
      body: {
        productId: "productId",
        userId: "userId",
        userName: "userName",
        reviewMessage: "reviewMessage",
        reviewValue: 5,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    sinon.stub(Order, "findOne").resolves(null);

    await addProductReview(req, res);

    expect(res.status.calledWith(403)).to.be.true;
    expect(res.json.calledWith({
      success: false,
      message: "You need to purchase product to review it.",
    })).to.be.true;
  });

  it("should return 400 if user has already reviewed the product", async () => {
    const req = {
      body: {
        productId: "productId",
        userId: "userId",
        userName: "userName",
        reviewMessage: "reviewMessage",
        reviewValue: 5,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    sinon.stub(Order, "findOne").resolves({ orderStatus: "delivered" });
    sinon.stub(ProductReview, "findOne").resolves({});

    await addProductReview(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({
      success: false,
      message: "You already reviewed this product!",
    })).to.be.true;
  });

  it("should add a review and return 201 if order is confirmed", async () => {
    const req = {
      body: {
        productId: "productId",
        userId: "userId",
        userName: "userName",
        reviewMessage: "reviewMessage",
        reviewValue: 5,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    const reviewData = {
      productId: "productId",
      userId: "userId",
      userName: "userName",
      reviewMessage: "reviewMessage",
      reviewValue: 5,
    };

    sinon.stub(Order, "findOne").resolves({ orderStatus: "confirmed" });
    sinon.stub(ProductReview, "findOne").resolves(null);
    sinon.stub(ProductReview.prototype, "save").resolves();
    sinon.stub(ProductReview, "find").resolves([reviewData]);
    sinon.stub(Product, "findByIdAndUpdate").resolves({});

    await addProductReview(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const responseArg = res.json.firstCall.args[0];
    expect(responseArg.success).to.be.true;
    expect(responseArg.data).to.have.property('productId', 'productId');
    expect(responseArg.data).to.have.property('userId', 'userId');
    expect(responseArg.data).to.have.property('reviewValue', 5);
  });

  it("should add a review and return 201 if order is delivered", async () => {
    const req = {
      body: {
        productId: "productId",
        userId: "userId",
        userName: "userName",
        reviewMessage: "reviewMessage",
        reviewValue: 5,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    const reviewData = {
      productId: "productId",
      userId: "userId",
      userName: "userName",
      reviewMessage: "reviewMessage",
      reviewValue: 5,
    };

    sinon.stub(Order, "findOne").resolves({ orderStatus: "delivered" });
    sinon.stub(ProductReview, "findOne").resolves(null);
    sinon.stub(ProductReview.prototype, "save").resolves();
    sinon.stub(ProductReview, "find").resolves([reviewData]);
    sinon.stub(Product, "findByIdAndUpdate").resolves({});

    await addProductReview(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    const responseArg = res.json.firstCall.args[0];
    expect(responseArg.success).to.be.true;
    expect(responseArg.data).to.have.property('productId', 'productId');
    expect(responseArg.data).to.have.property('userId', 'userId');
    expect(responseArg.data).to.have.property('reviewValue', 5);
  });
});
