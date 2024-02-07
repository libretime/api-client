# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, StrictInt, conint, constr
from libretime_client.models.role_enum import RoleEnum

class PatchedUser(BaseModel):
    """
    PatchedUser
    """
    id: Optional[StrictInt] = None
    role: Optional[RoleEnum] = None
    username: Optional[constr(strict=True, max_length=255)] = None
    email: Optional[constr(strict=True, max_length=1024)] = None
    first_name: Optional[constr(strict=True, max_length=255)] = None
    last_name: Optional[constr(strict=True, max_length=255)] = None
    login_attempts: Optional[conint(strict=True, le=2147483647, ge=-2147483648)] = None
    last_login: Optional[datetime] = None
    last_failed_login: Optional[datetime] = None
    skype: Optional[constr(strict=True, max_length=1024)] = None
    jabber: Optional[constr(strict=True, max_length=1024)] = None
    phone: Optional[constr(strict=True, max_length=1024)] = None
    __properties = ["id", "role", "username", "email", "first_name", "last_name", "login_attempts", "last_login", "last_failed_login", "skype", "jabber", "phone"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> PatchedUser:
        """Create an instance of PatchedUser from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "id",
                          },
                          exclude_none=True)
        # set to None if email (nullable) is None
        # and __fields_set__ contains the field
        if self.email is None and "email" in self.__fields_set__:
            _dict['email'] = None

        # set to None if login_attempts (nullable) is None
        # and __fields_set__ contains the field
        if self.login_attempts is None and "login_attempts" in self.__fields_set__:
            _dict['login_attempts'] = None

        # set to None if last_login (nullable) is None
        # and __fields_set__ contains the field
        if self.last_login is None and "last_login" in self.__fields_set__:
            _dict['last_login'] = None

        # set to None if last_failed_login (nullable) is None
        # and __fields_set__ contains the field
        if self.last_failed_login is None and "last_failed_login" in self.__fields_set__:
            _dict['last_failed_login'] = None

        # set to None if skype (nullable) is None
        # and __fields_set__ contains the field
        if self.skype is None and "skype" in self.__fields_set__:
            _dict['skype'] = None

        # set to None if jabber (nullable) is None
        # and __fields_set__ contains the field
        if self.jabber is None and "jabber" in self.__fields_set__:
            _dict['jabber'] = None

        # set to None if phone (nullable) is None
        # and __fields_set__ contains the field
        if self.phone is None and "phone" in self.__fields_set__:
            _dict['phone'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> PatchedUser:
        """Create an instance of PatchedUser from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return PatchedUser.parse_obj(obj)

        _obj = PatchedUser.parse_obj({
            "id": obj.get("id"),
            "role": obj.get("role"),
            "username": obj.get("username"),
            "email": obj.get("email"),
            "first_name": obj.get("first_name"),
            "last_name": obj.get("last_name"),
            "login_attempts": obj.get("login_attempts"),
            "last_login": obj.get("last_login"),
            "last_failed_login": obj.get("last_failed_login"),
            "skype": obj.get("skype"),
            "jabber": obj.get("jabber"),
            "phone": obj.get("phone")
        })
        return _obj

