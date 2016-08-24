var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var GameModel = require('../app/models/models').GameModel;

describe("Get all games", function(){
    // Test will pass if we get all todos
    it("should return all games", function(done){
        var GameMock = sinon.mock(GameModel);
        var expectedResult = {status: true, game: []};
        GameMock.expects('find').yields(null, expectedResult);
        GameModel.find(function (err, result) {
            GameMock.verify();
            GameMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a todo
    it("should return error", function(done){
        var GameMock = sinon.mock(GameModel);
        var expectedResult = {status: false, error: "Error"};
        GameMock.expects('find').yields(expectedResult, null);
        GameModel.find(function (err, result) {
            GameMock.verify();
            GameMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});